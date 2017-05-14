var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var HtmlWebpackPlugin = require('html-webpack-plugin')
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
    alias: {
      images: __dirname + '/images'
    }
  },

  module: {
  	rules: [
      {
        test: /.tpl$/,
        loader: 'vue-template-loader'
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader'
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
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  	new webpack.HotModuleReplacementPlugin(),
  ]
}

var compiler = webpack(config)

new WebpackDevServer(compiler, {
	contentBase: __dirname,
	stats: { colors: true, chunks: false },
	hot: false
})
.listen(port, function() {
	console.log('\n ==> '+ localServer +' \n')
})



