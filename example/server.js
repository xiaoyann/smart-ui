var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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

var config = {

	context: __dirname,

	entry: {
		app: [
			'webpack-dev-server/client?' + localServer,
			'./main.js'
		],
		vendor: [
			'vue',
			'vue-router'
		]
	},

	resolve: {
  	extensions: ['.js', '.vue'],
  },

  module: {
  	rules: [
      {
        test: /.tpl$/,
        loader: 'vue-template-loader',
        options: {
          transformToRequire: {
            // The key should be element name,
            // the value should be attribute name or its array
            img: 'src'
          }
        }
      },
  		{
  			test: /.js$/,
  			exclude: /node_modules/,
  			loader: 'babel-loader'
  		},
  		{
	      test: /\.vue$/,
	      loader: 'vue-loader',
	    },
	    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
	    	test: /\.css$/,
	    	loaders: ['style-loader', 'css-loader']
	    },
      {
	    	test: /\.(styl)$/,
	    	loaders: ['style-loader', 'css-loader', 'stylus-loader']
	    }
  	]
  },

  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  performance: {
    hints: process.env.NODE_ENV === 'production'
  }
}

var compiler = webpack(config)

new WebpackDevServer(compiler, {
	contentBase: __dirname,
	stats: { colors: true, chunks: false },
  disableHostCheck: true
})
.listen(port, function() {
	console.log('\n ==> '+ localServer +' \n')
})



