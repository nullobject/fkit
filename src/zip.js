import pair from './pair'
import zipWith from './zipWith'

/**
 * Zips two lists into a list of pairs.
 *
 * This is a special case of the `zipWith` function where the elements are
 * combined using the `pair` function.
 *
 * @function
 * @param {Array|String} as The first list.
 * @param {Array|String} bs The second list.
 * @returns {Array} The lists of `as` and `bs` zipped into a list of pairs.
 * @example
 *
 * import { zip } from 'fkit'
 * zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
 * zip('foo', 'bar') // [['f', 'b'], ['o', 'a'], ['o', 'r']]
 */
export default zipWith(pair)
