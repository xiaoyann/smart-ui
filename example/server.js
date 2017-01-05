var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var port = 8080
var localServer = `http://localhost:${port}`

var config = {

	context: __dirname,
	
	entry: {
		app: [
			'webpack-dev-server/client?' + localServer,
			'webpack/hot/only-dev-server',
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
  	new webpack.HotModuleReplacementPlugin(),
  ],

  performance: {
    hints: process.env.NODE_ENV === 'production'
  },
}

var compiler = webpack(config)

new WebpackDevServer(compiler, {
	contentBase: __dirname,
	stats: { colors: true, chunks: false },
	hot: true
})
.listen(port, function() {
	console.log('\n ==> '+ localServer +' \n')
})



