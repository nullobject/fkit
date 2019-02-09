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
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true }
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
