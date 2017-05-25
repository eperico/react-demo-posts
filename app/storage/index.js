/*
* Storage solution has to be different between web and native
* Web env uses localgorage: https://www.npmjs.com/package/localforage
* Native env uses AsyncStorage: http://facebook.github.io/react-native/docs/asyncstorage.html
*/
if (process.env.PLATFORM_ENV == 'web') {
  module.exports = require('./storage.web');
} else {
  module.exports = require('./storage.native');
}
