import axios              from 'axios'
import qs                 from 'qs'
import base64             from 'base-64'
import Auth               from './auth'
// import Logger             from './logger'
import { Config }         from '../config'
// import { SWITCH_ACCOUNT_URL } from '../constants/Endpoints'

// const DEBUG = false
const debug = console.log


// ====== Authentication utils ======

// get the authorization header for user registration
let getBasicAuthorization = function() {
  // 64 encoding with user's credentials
  let key  = Config.CLIENT_ID + ':' + Config.CLIENT_SECRET
  let hash = base64.encode(key)
  let auth = `Basic ${hash}`
  return auth
};


// get the authorization from the access token
let getAccessAuthorization = function(done) {
  Auth.getAccessToken().then(accessToken => {
    const token = (accessToken != null) ? `Bearer ${accessToken}`: ''
    done(token);
  });
};


let refreshAccessToken = function(url, done) {
  Auth.getRefreshToken().then(refreshToken => {
    let params = {
      grant_type: "refresh_token",
      refresh_token: refreshToken
    };
    debug("refresh token with", params)
    return authCall(url, "/auth/token", "post", params)(done)
  });
};


// ====== Query Utils ======

let extract_params = function(route) {
  let matches = (route.match(/\{[^\}]+\}/g)) || [];
  return matches.map(m => m.replace(/[\{\}]*/g, ''));
};


// ====== API functions ======

let authSuccessCallBack = done => (response) => {
  const { data, status } = response
  if (data.error != null) {
    Auth.deauthenticateUser().then(() => {
      debug("API callback error: ", data.error.message)
      return done(new Error(data.error.message))
    })
  } else {
    debug("API callback success: ", { data, status })
    Auth.authenticateUser(data.access_token, data.refresh_token).then(() => {
      done(null, response);
    })
  }
};


let authErrorCallback = done => (error) => {
  const { response } = error
  const { status, data } = response
  debug("authErrorCallback ", status, data)
  Auth.deauthenticateUser().then(() => {
    if (data != null) {
      return done(new Error(data))
    } else {
      return done(new Error(`Error calling service /auth: ${error}`))
    }
  })
};


let authCall = (url, route, verb, params) => (done) => {
  debug("authCall: ", { url, route, verb, params });
  axios({
    method: verb,
    url: url + route,
    data: params,
    params: params,
    paramsSerializer: (params) => { return qs.stringify(params) },
    headers: { 'Authorization': getBasicAuthorization() }
  })
  .then(authSuccessCallBack(done))
  .catch(authErrorCallback(done));
};


let successCallBack = done => (response) => {
  const { data, status } = response
  if (data.error != null) {
    debug("API callback error: ", { code: data.error.code });
    return done(new Error(data.error.message), {code: data.error.code});
  } else {
    // the active account is always returned with the callbacl to check if it has changed
    Auth.getActiveAccount().then(current_account_id => {
      let { active_account_id, res } = data;
      if (active_account_id && !current_account_id) {
        // no active account was set
        Auth.saveActiveAccount(active_account_id);
      }

      if (active_account_id && current_account_id && active_account_id != current_account_id) {
        // active account has changed, save new active account
        Auth.saveActiveAccount(active_account_id);

        // return error if active has changed from another source
        // if (!response.config.url.match(SWITCH_ACCOUNT_URL)) {
        //   return done(new Error("invalid_active_account"));
        // }
      }

      response.data = res
      debug("API callback success: ", { data, status });
      return done(null, response);
    })
  }
};


let call = (url, route, verb, params = {}, options = {}) =>
  (done = () => {}) => {
    getAccessAuthorization((token) => {
      if (!token) { return done(new Error("unauthorized")); }
      debug("call: ", { url, route, verb, params, options })
      // `params` are the URL parameters to be sent with the request. Must be a plain object or a URLSearchParams object
      // `data` is the data to be sent as the request body. Only applicable for request methods 'PUT', 'POST', and 'PATCH'
      // When no `transformRequest` is set, data must be of one of the following types: string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      let request = {
        method: verb,
        url: url + route,
        params: params,
        paramsSerializer: (params) => { return qs.stringify(params) },
        headers: { 'Authorization': token }
      }
      if (verb.toLowerCase() != 'get') {
        request.data = params
      }

      axios(request)
      .then(successCallBack(done))
      .catch((error) => {
        const { response } = error
        const { status, data } = response
        if (status == 401 && !options.token_refreshed) {
          refreshAccessToken(url, (err, res) => {
            if (err != null) {
              return done(new Error("unauthorized"));
            } else {
              return call(url, route, verb, params, { token_refreshed: true })(done);
            }
          });
        } else {
          var finalError;
          if (data) {
            finalError = (data.error) ? new Error(data.error.message) : new Error(data)
          } else if (data.length == 0) {
            finalError = new Error(`Error calling service ${route}`)
          } else if (typeof(data) === 'string') {
            finalError = new Error(`Error calling service ${route}: ${data}`.substring(0, 100))
          }
          debug(finalError.message)
          done(finalError)
        }
      });
    });
};


let api = (url) => {
  let methods = {};
  let generate_method_for = (url, verb) => route =>
    function(params, done) {
      let route_params = extract_params(route);
      let final_route = route;
      for (let param of Array.from(route_params)) {
        final_route = final_route.replace(`{${param}}`, params[param]);
      }

      const anonymousRoutes = "forgot-password|reset-password"
      if (route.startsWith("/auth") || route.match(anonymousRoutes)) {
        return authCall(url, final_route, verb, params)(done);
      } else {
        return call(url, final_route, verb, params)(done);
      }
    };

  for (let verb of [ "get", "post", "put", "delete" ]) {
    (verb => methods[verb] = generate_method_for(url, verb))(verb);
  }

  methods.crud_methods = type =>
    ({
      get:    methods.get(`${type}/{id}`),
      save:   methods.put(`${type}`),
      search: methods.get(`${type}`),
      all:    methods.get(`${type}`),
      remove: methods.delete(`${type}/{id}`),
      update: methods.post(`${type}/update`)
    });

  return methods;
};


export { api as API };
