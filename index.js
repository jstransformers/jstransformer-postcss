'use strict';

var Promise = require('promise');
var postcss = require('postcss');

exports.name = 'postcss';
exports.inputFormats = ['postcss', 'css'];
exports.outputFormat = 'css';

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    var plugins = []
    // TODO: Support having an array of plugin objects, or strings.
    var pluginsToLoad = options.plugins || []
    for (var i in pluginsToLoad) {
      var plugin = null
      switch (typeof i) {
        case 'string':
          plugin = require(i)(pluginsToLoad[i])
          break
        case 'object':
        default:
          plugin = i
          break
      }
      if (plugin) {
        plugins.push(plugin)
      }
    }
    postcss(plugins).process(str, options).then(function (result) {
      // TODO: Add result.map to "dependencies".
      resolve(result.css)
    }, reject)
  })
};
