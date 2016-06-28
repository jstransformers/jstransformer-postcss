'use strict';

var postcss = require('postcss')
var loop = require('simple-loop')

exports.name = 'postcss'
exports.inputFormats = ['postcss', 'css']
exports.outputFormat = 'css'

exports.renderAsync = function (str, options) {
  return new Promise(function (resolve, reject) {
    var plugins = []
    var pluginsToLoad = options.plugins || []
    loop(pluginsToLoad, function (item, i) {
      var plugin = null
      switch (typeof i) {
        case 'number':
          if (typeof item == 'string') {
            plugin = require(item)
          }
          else {
            plugin = item
          }
          break
        case 'object':
          plugin = i
          break
        case 'string':
          plugin = require(i)(item)
          break
        default:
          plugin = i
          break
      }
      if (plugin) {
        plugins.push(plugin)
      }
    })
    postcss(plugins).process(str, options).then(function (result) {
      // TODO: Add result.map to "dependencies".
      resolve(result.css)
    }).catch(reject)
  })
};
