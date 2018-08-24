const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new CleanPlugin('dist'),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../report.html',
      generateStatsFile: true,
      statsFilename: '../stats.json'
    })
  ]
});
