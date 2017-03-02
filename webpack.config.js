var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {

	context: __dirname,

  devtool: 'source-map',
	
	entry: {
		index: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, './lib'),
    library: 'SmartUI',
    libraryTarget: 'umd',
    filename: 'smart-ui.js'
	},

  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
  		{
	      test: /\.vue$/,
	      loader: 'vue-loader',
	      options: {
          loaders: {
            stylus: ExtractTextPlugin.extract({
              loader: 'css-loader?minimize!stylus-loader?sourceMap'
            })
          }
        }
	    },
	    {
	    	test: /\.css$/,
	    	loader: ExtractTextPlugin.extract('css-loader?minimize&sourceMap')
	    },
	   	{
	    	test: /\.(styl)$/,
	    	loader: ExtractTextPlugin.extract(['css-loader?minimize&sourceMap', 'stylus-loader'])
	    }
  	]
  },

  plugins: [
  	new webpack.DefinePlugin({
      'process.env': '"production"'
    }),

    // uglify js
		new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      minimize: true
    }),

    // extract css into its own file
    new ExtractTextPlugin('smart-ui.css'),
  ],

  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },
}

webpack(config, function(err, stats) {
	if (err) throw err
  console.log(stats.toString({
  	colors: true,
  	chunks: false,
  	children: false
  }))
})




