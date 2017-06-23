const path = require('path');
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
  }

};
