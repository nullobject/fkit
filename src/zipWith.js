import curry from './curry'
import zipWith from './uncurried/zipWith'

/**
 * Zips two lists with a function.
 *
 * @function
 * @param {Function} f The zipping function.
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array} The lists of `as` and `bs` zipped with the binary function `f`.
 * @example
 *
 * import { zipWith } from 'fkit'
 * zipWith((a, b) => a + b, [1, 2, 3], [4, 5, 6]) // [5, 7, 9]
 * zipWith((a, b) => a + b, 'foo', 'bar') // ['fb', 'oa', or']
 */
export default curry(zipWith)
