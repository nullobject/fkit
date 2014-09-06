var webpack = require('webpack');

plugins = [
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || true)),
    PRODUCTION:  JSON.stringify(JSON.parse(process.env.NODE_ENV === 'production' || false))
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
    path:     './build',
    library:  'fkit'
  }
};
