const path = require('path');
let NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

  entry: {
    index: path.resolve('./src/js/index.js')
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dest/js/'),
    library:['name']
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
    }]
  },
  watch: NODE_ENV === 'development'

};
