import Storage from '../storage'

const DEBUG = false


class Auth {

  static logError(error) {
    if (DEBUG) { console.log(error.message) }
  }

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(accessToken, refreshToken) {
    return Storage
      .save('auth', { accessToken, refreshToken })
      .catch(this.logError);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return Storage
      .get('auth')
      .then(value => { return value.accessToken !== null; })
      .catch(err => {
        this.logError(err);
        return false;
      });
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    return Storage
      .delete('auth')
      .then(() => { Storage.delete('activeAccount') })
      .catch(this.logError);
  }

  /**
   * Get access token value.
   *
   * @returns {string}
   */
  static getAccessToken() {
    return Storage
      .get('auth')
      .then(value => { return value.accessToken })
      .catch(this.logError);
  }

  /**
   * Get refresh token value.
   *
   * @returns {string}
   */
  static getRefreshToken() {
    return Storage
      .get('auth')
      .then(value => { return value.refreshToken })
      .catch(this.logError);
  }


  /**
   * Save the active account used by a territory manager to always check for updates
   *
   * @param {string} activeAccount
   */
  static saveActiveAccount(id) {
    if (id && id !== null) {
      return Storage
        .save('activeAccount', id)
        .catch(this.logError);
    }
  }


  /**
   * Get the active account used by a territory manager
   *
   * @param {string} activeAccount
   */
  static getActiveAccount() {
    return Storage
      .get('activeAccount')
      .catch(this.logError);
  }


}

export default Auth;
