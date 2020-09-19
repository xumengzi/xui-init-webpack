const path = require('path');
const { default: merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  optimization: {
  	chunkIds: "named", 
  	splitChunks: {
  		minSize: 3000,
  		maxAsyncRequests: 5,
  		automaticNameDelimiter: '-',
  		name: true,
  		cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 3, // 默认为3
        },
  			vendors: {
  				test: /[\\/]node_modules[\\/]/,
  				priority: -10
  			}
  		}
  	},
    runtimeChunk: {
      name: 'manifest'
    }
  }
};

module.exports = merge(commonConfig, prodConfig)