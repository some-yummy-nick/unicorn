const path = require('path'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

let NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

  entry: {
    index: path.resolve('./src/js/index.js')
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dest/js/'),
    library: ['name']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader"
          ],
          publicPath: "/dest"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "../styles/vendor.css",
      disable: false,
      allChunks: true
    })
  ],
  watch: NODE_ENV === 'development'

};
