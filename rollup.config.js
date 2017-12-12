import babel from 'rollup-plugin-babel'
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
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    uglify()
  ]
}
