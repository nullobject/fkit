import concatMap from './uncurried/concatMap'
import curry from './curry'

/**
 * Maps a function, that returns a list, over a list and concatenates the
 * results.
 *
 * @function
 * @param {Function} f The function to apply to each value in the list. It must
 * also return a list.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as`, mapped with the function `f`, and concatenated together.
 * @example
 *
 * import { concatMap } from 'fkit'
 * concatMap(a => [a, 0], [1, 2, 3]) // [1, 0, 2, 0, 3, 0]
 * concatMap(a => [a, '-'], 'foo') // 'f-o-o-'
 */
export default curry(concatMap)
