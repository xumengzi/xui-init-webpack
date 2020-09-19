const path = require('path');
const { default: merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    // open: true
  },

};

module.exports = merge(commonConfig, devConfig)