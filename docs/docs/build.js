process.env.NODE_ENV = 'production'
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var InlineManifestPlugin = require('inline-manifest-webpack-plugin')
var WebpackChunkHash = require("webpack-chunk-hash");

var config = {

  context: __dirname,

  entry: {
    app: [
      './src/main.js'
    ],
    vendor: [
      'vue',
      'vue-router',
      './src/libs/prismjs/index.js',
    ]
  },

  output: {
    filename: 'dist/js/[name].js',
    path: __dirname
  },

  resolve: {
    extensions: ['.js', '.vue'],
  },

  resolveLoader: {
    alias: {
      'tpl-loader': path.resolve(__dirname, './tpl-loader.js')
    }
  },

  module: {
    rules: [
      {
        test: /.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /.tpl$/,
        use: [
          {
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
            loader: 'tpl-loader'
          }
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader?name=images/[name].[ext]'
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
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),

    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),

    new InlineManifestPlugin({
      name: 'webpackManifest'
    }),

    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),

    // extract css into its own file
    new ExtractTextPlugin('dist/css/[name].css'),
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





