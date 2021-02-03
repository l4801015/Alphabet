const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },

  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    publicPath: '/js',
    watchContentBase: true,
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

};