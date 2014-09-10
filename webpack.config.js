var webpack = require('webpack');

plugins = [
  new webpack.DefinePlugin({
    DEVELOPMENT: process.env.NODE_ENV === 'development' || true,
    PRODUCTION:  process.env.NODE_ENV === 'production' || false
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    fkit: './src/fkit.js'
  },
  output: {
    filename: '[name].js',
    path:     './dist',
    library:  'fkit'
  }
};
