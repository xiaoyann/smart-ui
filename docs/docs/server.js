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
			'./src/main.js'
		],
		vendor: [
			'vue',
			'vue-router'
		]
	},

	resolve: {
  	extensions: ['.js', '.vue']
  },

  module: {
  	rules: [
      {
        test: /.txt$/,
        loader: 'raw-loader'
      },
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
        loader: 'file-loader?name=images/[hash].[ext]'
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
      template: './src/index.html'
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



