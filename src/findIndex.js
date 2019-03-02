import curry from './curry'
import findIndex from './uncurried/findIndex'

/**
 * Finds the index of the first occurance of a value in a list that satisfies a
 * predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Number} An index of the first occurance of a value in the list of
 * `as` that satisfies the predicate function `p`, or `undefined` if no value
 * was found.
 * @example
 *
 * import { eq, findIndex, gt } from 'fkit'
 *
 * findIndex(gt(1), []) // undefined
 * findIndex(gt(1), [1, 2, 3]) // 1
 *
 * findIndex(eq('o'), '') // undefined
 * findIndex(eq('o'), 'foo') // 1
 */
export default curry(findIndex)
