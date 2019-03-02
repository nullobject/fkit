import curry from './curry'
import filter from './uncurried/filter'

/**
 * Filters a list using a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list to filter.
 * @returns {Array|String} A list that contains only the elements in the list
 * of `as` that satisfy the predicate function `p`.
 * @example
 *
 * import { eq, filter, gt } from 'fkit'
 * filter(gt(1), [1, 2, 3]) // [2, 3]
 * filter(eq('o'), 'foo') // 'oo'
 */
export default curry(filter)
