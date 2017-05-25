console.log("NODE_ENV", process.env.NODE_ENV);

let defaultConfig   = require('./default.js')
let envConfig = null
if (process.env.NODE_ENV != 'development') {
  envConfig       = require(`./${process.env.NODE_ENV}.js`)
}

export const Config = (process.env.NODE_ENV == 'development') ? defaultConfig : Object.assign({}, defaultConfig, envConfig)
