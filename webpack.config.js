const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  plugins: [
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

