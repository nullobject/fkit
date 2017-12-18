import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import {minify} from 'uglify-es'

const plugins = [
  babel({exclude: '**/node_modules/**'})
]

export default [
  // UMD and ES versions.
  {
    input: 'src/fkit',
    output: [
      {file: pkg.main, format: 'umd', name: 'F'},
      {file: pkg.module, format: 'es'}
    ],
    plugins
  },

  // Browser minified version.
  {
    input: 'src/fkit',
    output: [
      {file: pkg.unpkg, format: 'umd', name: 'F'}
    ],
    plugins: plugins.concat([uglify({}, minify)])
  }
]
