import uglify from 'rollup-plugin-uglify'
import {minify} from 'uglify-es'

const filename = process.env.NODE_ENV === 'production' ? 'fkit.min.js' : 'fkit.js'

const config = {
  input: 'src/fkit',
  output: {
    file: 'dist/' + filename,
    format: 'umd'
  },
  name: 'F',
  plugins: []
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(uglify({}, minify))
}

export default config
