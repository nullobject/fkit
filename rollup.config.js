import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

const filename = process.env.BUILD === 'production' ? 'fkit.min.js' : 'fkit.js'
const plugins = [commonjs(), babel({exclude: 'node_modules/**'})]

if (process.env.BUILD === 'production') {
  plugins.push(uglify())
}

export default {
  input: 'src/fkit',
  output: {
    file: 'dist/' + filename,
    format: 'iife'
  },
  name: 'F',
  plugins
}
