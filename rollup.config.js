import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'

const plugins = [
  babel({exclude: '**/node_modules/**'}),
  filesize()
]

export default [
  // UMD and ES versions.
  {
    input: 'src/fkit.js',
    output: [
      {file: pkg.main, format: 'umd', name: 'F'},
      {file: pkg.module, format: 'es'}
    ],
    plugins
  },

  // Browser minified version.
  {
    input: 'src/fkit.js',
    output: [
      {file: pkg.unpkg, format: 'umd', name: 'F'}
    ],
    plugins: plugins.concat([uglify()])
  }
]
