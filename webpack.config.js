const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =   {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
      // title: 'My App',
      filename: './src/index.html'
      }
    )
  ]
};

