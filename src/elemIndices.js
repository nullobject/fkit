import curry from './curry'
import elemIndices from './uncurried/elemIndices'

/**
 * Gets the indices of all occurances of a value in a list.
 *
 * @function
 * @param a The value to find.
 * @param {Array|String} as The list.
 * @returns {Array} The indices of all occurances of the value `a` in the list
 * of `as`.
 * @example
 *
 * import { elemIndices } from 'fkit'
 *
 * elemIndices(0, [1, 2, 3]) // []
 * elemIndices(1, [1, 2, 3]) // [0]
 *
 * elemIndices('a', 'foo') // []
 * elemIndices('o', 'foo') // [1, 2]
 */
export default curry(elemIndices)
