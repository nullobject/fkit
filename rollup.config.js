import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const plugins = [
  babel({ exclude: '**/node_modules/**' }),
  filesize()
]

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs', name: 'F' },
      { file: pkg.module, format: 'es' }
    ],
    plugins
  }, {
    input: 'src/index.js',
    output: [
      { file: pkg.unpkg, format: 'iife', name: 'F' }
    ],
    plugins: plugins.concat([uglify()])
  }
]
