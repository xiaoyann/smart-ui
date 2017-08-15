process.env.NODE_ENV = 'production'
var webpack = require('webpack')
var config = require('./base')

webpack(config, function(err, stats) {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    chunks: false,
    children: false
  }))
})





