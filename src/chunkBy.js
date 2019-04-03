import curry from './curry'
import chunkBy from './uncurried/chunkBy'

/**
 * Chunks contiguous values in a list using a comparator function.
 *
 * The comparator function `f` compares two values, `a` and `b`. If the values
 * are both considered to be in the same chunk, then the comparator function
 * should return `true`. Otherwise it should return `false`.
 *
 * @function
 * @param {Function} c The comparator function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the values in the list of `as`
 * chunked into sublists that satisfy the comparator function `c`.
 * @example
 *
 * import { chunkBy } from 'fkit'
 * chunkBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 * chunkBy((a, b) => a === b, 'Mississippi') // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
 */
export default curry(chunkBy)
