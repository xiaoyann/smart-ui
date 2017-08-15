process.env.NODE_ENV = 'production'
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var InlineManifestPlugin = require('inline-manifest-webpack-plugin')
var WebpackChunkHash = require("webpack-chunk-hash")
var version = require('../package.json').version
var isProduction = process.env.NODE_ENV === 'production'

var config = {

  context: __dirname,

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
    filename: 'js/[name].js?v=[chunkhash]',
    path: path.resolve(__dirname, '../docs/demo')
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
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: ExtractTextPlugin.extract({
              use: 'css-loader?minimize!stylus-loader'
            })
          }
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?minimize')
      },
      {
        test: /\.(styl)$/,
        loader: ExtractTextPlugin.extract(['css-loader?minimize', 'stylus-loader'])
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),

    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),

    new InlineManifestPlugin({
      name: 'webpackManifest'
    }),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './index.html',
      version: 'v' + version
    }),

    // extract css into its own file
    new ExtractTextPlugin('css/[name].css?v=[contenthash]'),
  ]
}

if (isProduction) {
  config.plugins.push(
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true
    })
  )
}

module.exports = config
