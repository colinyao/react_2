let defaultSettings=require('./defaults.js');
let path=require('path')
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? defaultSettings.build.assetsSubDirectory
    : defaultSettings.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}