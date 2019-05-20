const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
        MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
      }),
    new HtmlWebpackPlugin(
      {
        // title: 'My App',
        // filename: './src/index.html',
        // filename - имя выходного файла (см: https://github.com/jantimon/html-webpack-plugin#options)
        template: './src/index.html'
      }
    )
  ]
};