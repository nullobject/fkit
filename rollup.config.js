import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import glob from 'glob'
import { basename } from 'path'
import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const input = glob
  .sync('src/**/*.js', { ignore: ['src/*.test.js', 'src/internal/*'] })
  .reduce((result, path) => {
    let filename = basename(path, '.js')
    if (path.includes('uncurried')) {
      filename = '_' + filename
    }
    result[filename] = path
    return result
  }, {})

const plugins = [
  babel()
]

export default [
  {
    input,
    output: {
      dir: 'dist',
      format: 'cjs',
      esModule: false
    },
    plugins
  }, {
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: plugins.concat([
      filesize()
    ])
  }, {
    input: 'src/index.js',
    output: {
      file: pkg.unpkg,
      format: 'iife',
      name: 'F'
    },
    plugins: plugins.concat([
      filesize(),
      uglify()
    ])
  }
]
