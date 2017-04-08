const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}