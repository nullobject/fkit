import curry from './curry'
import map from './uncurried/map'

/**
 * Maps a function over a list.
 *
 * @function
 * @param {Function} f The function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` mapped with the function `f`.
 * @example
 *
 * import { inc, map, toUpper } from 'fkit'
 * map(inc, [1, 2, 3]) // [2, 3, 4]
 * map(toUpper, 'foo') // ['F', 'O', 'O']
 */
export default curry(map)
