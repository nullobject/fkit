import curry from './curry'
import toArray from './internal/toArray'

/**
 * Maps a function over a list.
 *
 * @param {Function} f A function.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` mapped with the function `f`.
 *
 * @example
 *
 * F.map(F.inc, [1, 2, 3]) // [2, 3, 4]
 * F.map(F.toUpper, 'foo') // ['F', 'O', 'O']
 */
export function map (f, as) {
  return toArray(as).map(f)
}

export default curry(map)
