var DefinePlugin = require('webpack').DefinePlugin;

module.exports = {
  entry: {
    fkit: './src/fkit.js'
  },
  output: {
    path:          './dist',
    filename:      '[name].js',
    library:       'fkit = F',
    libraryTarget: 'var'
  },
  plugins: [
    new DefinePlugin({
      DEVELOPMENT: process.env.NODE_ENV === 'development' || true,
      PRODUCTION:  process.env.NODE_ENV === 'production' || false
    })
  ]
};
