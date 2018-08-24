const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    compress: true,
    noInfo: true,
    open: true,
    overlay: true
    // https: true
  }
});
