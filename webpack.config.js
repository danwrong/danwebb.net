var webpack = require('webpack');

var config = {
    mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
            }
        ]
    },
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: 'build/build.js'
    },
    devServer: {
      disableHostCheck: true
    }
  }

module.exports = config;