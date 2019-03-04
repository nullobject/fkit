import curry from './curry'
import partition from './uncurried/partition'

/**
 * Partitions a list using a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array} A list that contains the elements in the list of `as` split
 * into a pair of lists: the elements that satisfy the predicate function `p`
 * and the elements that do not satisfy the predicate function `p`.
 * @example
 *
 * import { eq, gt, partition } from 'fkit'
 * partition(gt(1), [1, 2, 3]) // [[2, 3], [1]]
 * partition(eq('o'), 'foo') // ['oo', 'f']
 */
export default curry(partition)
