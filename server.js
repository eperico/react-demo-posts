var webpack          = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config           = require('./web/webpack/web.dev.config')
const port           = 4000
const host           = "0.0.0.0"

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,

  contentBase: 'web/public/',

  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(port, host, function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + port);
});
