import curry from './curry'
import findIndices from './uncurried/findIndices'

/**
 * Finds the indices of all the values in a list that satisfy a predicate
 * function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array} A list of indices that satisfy the predicate function `p`.
 * @example
 *
 * import { eq, findIndices, gt } from 'fkit'
 *
 * findIndices(gt(1), []) // []
 * findIndices(gt(1), [1, 2, 3]) // [1, 2]
 *
 * findIndices(eq('o'), '') // []
 * findIndices(eq('o'), 'foo') // [1, 2]
 */
export default curry(findIndices)
