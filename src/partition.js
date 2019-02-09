import compose from './compose'
import curry from './curry'
import not from './not'
import { filter } from './filter'

/**
 * Partitions a list using a predicate function.
 *
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
export function partition (p, as) {
  return [
    filter(p, as),
    filter(compose(not, p), as)
  ]
}

export default curry(partition)
