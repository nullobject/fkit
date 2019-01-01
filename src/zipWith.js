import curry from './curry'
import toArray from './internal/toArray'

/**
 * Zips two lists with a function.
 *
 * @param {Function} f A binary function.
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array} The lists of `as` and `bs` zipped with the binary function `f`.
 */
export function zipWith (f, as, bs) {
  const n = Math.min(as.length, bs.length)
  return toArray(as.slice(0, n)).map((a, i) => f(a, bs[i]))
}

export default curry(zipWith)
