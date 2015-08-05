# jstransformer-postcss

[PostCSS](https://github.com/postcss/postcss) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-postcss/master.svg)](https://travis-ci.org/jstransformers/jstransformer-postcss)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-postcss/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-postcss?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-postcss/master.svg)](http://david-dm.org/jstransformers/jstransformer-postcss)
[![NPM version](https://img.shields.io/npm/v/jstransformer-postcss.svg)](https://www.npmjs.org/package/jstransformer-postcss)

## Installation

```
npm install jstransformer-postcss
```

## API

```js
var postcss = require('jstransformer')(require('jstransformer-postcss'))

postcss.render('div.foo { width: 100%; }').body
//=> 'div.foo { width: 100%; }'
```

## License

MIT
