import curry from './curry'
import head from './head'
import { filter } from './filter'

/**
 * Finds the first value in a list that satisfies a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns An value in the list of `as` that satisfies the predicate function
 * `p`, or `undefined` if no value was found.
 *
 * @example
 *
 * F.find(F.gt(1), []) // undefined
 * F.find(F.gt(1), [1, 2, 3]) // 2
 *
 * F.find(F.eq('o'), '') // undefined
 * F.find(F.eq('o'), 'foo') // 'o'
 */
export function find (p, as) {
  return head(filter(p, as))
}

export default curry(find)
