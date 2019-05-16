const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'src/index.js',
  mode: 'production',
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ],
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })    
  ],
  
};