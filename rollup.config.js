import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/fkit',
  output: {
    file: 'dist/fkit.js',
    format: 'iife'
  },
  name: 'F',
  plugins: [
    buble(),
    commonjs(),
    uglify()
  ]
}
