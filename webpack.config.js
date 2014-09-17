var webpack = require('webpack');

plugins = [
  new webpack.DefinePlugin({
    DEVELOPMENT: process.env.NODE_ENV === 'development' || true,
    PRODUCTION:  process.env.NODE_ENV === 'production' || false
  })
];

module.exports = {
  entry: {
    fkit: './src/fkit.js'
  },
  output: {
    path:          './dist',
    filename:      '[name].js',
    library:       'fkit',
    libraryTarget: 'var'
  },
  plugins: plugins
};
