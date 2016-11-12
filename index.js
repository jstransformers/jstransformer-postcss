'use strict';

var postcss = require('postcss')
var loop = require('simple-loop')

exports.name = 'postcss'
exports.outputFormat = 'css'

function sanitizePlugins(pluginsToLoad) {
  var plugins = []
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
  return plugins
}

exports.render = function (str, options) {
  var plugins = sanitizePlugins(options && options.plugins || [])
  return postcss(plugins).process(str, options || {}).css
}

exports.renderAsync = function (str, options) {
  var plugins = sanitizePlugins(options && options.plugins || [])
  return postcss(plugins).process(str, options || {}).then(function (result) {
    // TODO: Add result.map to "dependencies".
    return result.css
  })
}
