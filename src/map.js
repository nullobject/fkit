import curry from './curry'

/**
 * Maps a function over a list.
 *
 * @param {Function} f A function.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` mapped with the function `f`.
 * @example
 *
 * import { inc, map, toUpper } from 'fkit'
 * map(inc, [1, 2, 3]) // [2, 3, 4]
 * map(toUpper, 'foo') // ['F', 'O', 'O']
 */
export function map (f, as) {
  return Array.from(as).map(f)
}

export default curry(map)
