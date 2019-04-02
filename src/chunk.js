import eq from './eq'
import chunkBy from './chunkBy'

/**
 * Chunks the values in a list.
 *
 * This is a special case of the `chunkBy` function where the values are compared
 * using the strict equality `===` operator.
 *
 * @function
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the values in the list of `as`
 * chunked into sublists of equal values.
 * @example
 *
 * import { chunk } from 'fkit'
 * chunk([1, 2, 2, 3, 3, 3]) // [[1], [2, 2], [3, 3, 3]]
 * chunk('Mississippi') // ['M', 'i', 'ss', 'i', 'ss', 'i', 'pp', 'i']
 */
export default chunkBy(eq)
