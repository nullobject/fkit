import curry from './curry'
import { pair } from './pair'
import { zipWith } from './zipWith'

/**
 * Zips two lists into a list of pairs.
 *
 * This is a special case of the `zipWith` function where the elements are
 * combined using the `pair` function.
 *
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array} The lists of `as` and `bs` zipped into a list of pairs.
 *
 * @example
 *
 * F.zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
 * F.zip('foo', 'bar') // [['f', 'b'], ['o', 'a'], ['o', 'r']]
 *
 */
export function zip (as, bs) {
  return zipWith(pair, as, bs)
}

export default curry(zip)
