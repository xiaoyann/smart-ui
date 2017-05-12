process.env.NODE_ENV = 'production'
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {

  context: __dirname,

  devtool: 'source-map',
  
  entry: {
    app: [
      './main.js'
    ],
    vendor: [
      'vue', 
      'vue-router'
    ]
  },

  output: {
    filename: 'docs/js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../../docs')
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
        test: /\.md/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader?limit=1000000000'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: ExtractTextPlugin.extract({
              use: 'css-loader?minimize!stylus-loader?sourceMap'
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
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './index.html'
    }),

    // extract css into its own file
    new ExtractTextPlugin('docs/css/[name].[contenthash].css'),
  ],
}

webpack(config, function(err, stats) {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    chunks: false,
    children: false
  }))
})




