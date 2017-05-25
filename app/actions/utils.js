import { dateDiffInMinutes } from '../core/utils'


const PENDING_STATE   = '_PENDING'
const REJECTED_STATE  = '_REJECTED'
const FULFILLED_STATE = '_FULFILLED'

/*
* Action wraps the method call and specified parameters by dispatching predefined requests.
* This function can be used to have the default requests PENDING, REJECTED and FULFILLED without specific callback behaviour.
* - optional callback enables to execute specific action after execution
* - optional dataToDispatch enables to dispatch specific data needed in the reducer.
*/
const action = (args) => (dispatch) => {
  let { request, method, params, dataToDispatch, callback } = args
  if (typeof params === 'undefined' || params === null) {
    params = {}
  }
  if (typeof callback === 'undefined' || callback === null) {
    callback = () => {}
  }

  dispatch({type: request.concat(PENDING_STATE), dataToDispatch})
  method(params, (err, res) => {
    if (err) {
      dispatch({type: request.concat(REJECTED_STATE), payload: err, dataToDispatch})
      callback(err)
    } else {
      dispatch({type: request.concat(FULFILLED_STATE), payload: res, dataToDispatch})
      callback(null, res)
    }
  })
}

// - timestamp is the last time the data was fetched
// - ttl: time to live in minutes
const isOutdated = (timestamp, ttl = 5) => {
  const lastUpdated = new Date(timestamp)
  const now = new Date()
  const diff = dateDiffInMinutes(lastUpdated, now)
  return diff > ttl
}


export {
  action,
  isOutdated
};
