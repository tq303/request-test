const path = require('path');

module.exports = {  
  entry: path.join(__dirname, 'handler.ts'),
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js', '']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'handler.js'
  },
};