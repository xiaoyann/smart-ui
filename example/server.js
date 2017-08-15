var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./base')
var port = 8082
var host = getIP()
var localServer = `http://${host}:${port}`

function getIP() {
  var os = require('os')
  var IPv4 = '127.0.0.1'
  var interfaces = os.networkInterfaces()
  for (var key in interfaces) {
    interfaces[key].some(function(details){
      if (details.family == 'IPv4' && key == 'en0') {
        IPv4 = details.address
        return true
      }
    })
  }
  return IPv4
}

config.entry.app.unshift('webpack-dev-server/client?' + localServer)

var compiler = webpack(config)

new WebpackDevServer(compiler, {
	contentBase: __dirname,
	stats: { colors: true, chunks: false },
  disableHostCheck: true
})
.listen(port, function() {
	console.log('\n ==> '+ localServer +' \n')
})



