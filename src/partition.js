import compose from './compose'
import curry from './curry'
import not from './not'
import { filter } from './filter'

export function partition (p, as) {
  return [
    filter(p, as),
    filter(compose(not, p), as)
  ]
}

/**
 * Returns a list that contains the elements in the list of `as` split into a
 * pair of lists: the elements that satisfy the predicate function `p` and the
 * elements that do not satisfy the predicate function `p`.
 *
 * @summary Partitions a list using a predicate function.
 *
 * @example
 *
 * F.partition(F.gt(1), [1, 2, 3]) // [[2, 3], [1]]
 * F.partition(F.eq('o'), 'foo') // ['oo', 'f']
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A pair of lists.
 */
export default curry(partition)
