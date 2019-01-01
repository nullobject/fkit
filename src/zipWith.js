import curry from './curry'
import toArray from './internal/toArray'

export function zipWith (f, as, bs) {
  const n = Math.min(as.length, bs.length)
  return toArray(as.slice(0, n)).map((a, i) => f(a, bs[i]))
}

/**
 * Returns the lists of `as` and `bs` zipped with the binary function `f`.
 *
 * @summary Zips two lists with a function.
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(zipWith)
