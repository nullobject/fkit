var webpack = require('webpack');

module.exports = {
  entry: {
    // fkit: './src/fkit',
    stream: './examples/stream'
  },
  output: {
    filename: '[name].js',
    path: './build',
    publicPath: '/build/'
  },
  // plugins: [new webpack.optimize.CommonsChunkPlugin('./src/fkit.js', ['stream'])]
};
