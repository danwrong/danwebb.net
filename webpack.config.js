var webpack = require('webpack'),
    path    = require('path');

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
      filename: 'assets/index.js'
    },
    devServer: {
      disableHostCheck: true,
      contentBase: path.join(__dirname, 'public'),
      compress: true,
      port: 3000
    }
  }

module.exports = config;