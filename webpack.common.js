const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: './js/[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Img: path.resolve(__dirname, './src/assets/img')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(sass|css)$/,
        use: [
          // process.env.NODE_ENV !== 'production'
          //   ? 'style-loader'
          //   :
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'postcss-loader'
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            minimize: true,
            removeComments: true,
            collapseWhitespace: true
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'Title',
      filename: 'index.html',
      template: path.resolve(__dirname, './index.html'),
      chunks: ['app', 'commons', 'index']
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].css',
      chunkFilename: './css/[name].css'
    })
  ]
};
