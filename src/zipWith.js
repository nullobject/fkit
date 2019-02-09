import curry from './curry'

/**
 * Zips two lists with a function.
 *
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
export function zipWith (f, as, bs) {
  const n = Math.min(as.length, bs.length)
  return Array.from(as.slice(0, n)).map((a, i) => f(a, bs[i]))
}

export default curry(zipWith)
