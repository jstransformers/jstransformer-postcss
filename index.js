'use strict'

const postcss = require('postcss')
const loop = require('simple-loop')

exports.name = 'postcss'
exports.outputFormat = 'css'

function sanitizePlugins(pluginsToLoad) {
  const plugins = []
  loop(pluginsToLoad, (item, i) => {
    let plugin = null
    switch (typeof i) {
      case 'number':
        if (typeof item === 'string') {
          plugin = require(item)
        } else {
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
  const opts = options || {}
  const plugins = sanitizePlugins(opts.plugins || [])
  return postcss(plugins).process(str, opts).css
}

exports.renderAsync = function (str, options) {
  const opts = options || {}
  const plugins = sanitizePlugins(opts.plugins || [])
  return postcss(plugins).process(str, opts).then(result => {
    // TODO: Add result.map to "dependencies".
    return result.css
  })
}
