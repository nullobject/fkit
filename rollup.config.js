import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const plugins = [
  babel({ exclude: '**/node_modules/**' }),
  filesize()
]

export default [
  // UMD and ES versions.
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'umd', name: 'F' },
      { file: pkg.module, format: 'es' }
    ],
    plugins
  },

  // Browser minified version.
  {
    input: 'src/index.js',
    output: [
      { file: pkg.unpkg, format: 'umd', name: 'F' }
    ],
    plugins: plugins.concat([uglify()])
  }
]
