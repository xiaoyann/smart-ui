// Karma configuration
// Generated on Sun May 28 2017 10:00:25 GMT+0800 (CST)

require('phantomjs-prebuilt').path = './node_modules/.bin/phantomjs'

const webpackConfig = require('./webpack.config.js')

delete webpackConfig.entry

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      './tests/index.js'
    ],


    plugins: [
      'karma-coverage-istanbul-reporter',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './tests/index.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage-istanbul'],


    // coverage-istanbul 输出配置，报告文件输出于根目录下的 coverage 文件夹内
    coverageIstanbulReporter: {
       // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
      reports: ['html', 'lcovonly', 'text-summary'],
       // base output directory
      dir: './coverage',
       // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,
       // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html'
        }
      }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // 设定终端上不输出 webpack 的打包信息
    webpackMiddleware: {
      noInfo: true
    },

    webpack: webpackConfig
  })
}
