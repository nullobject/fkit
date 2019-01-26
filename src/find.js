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
 * @example
 *
 * import { eq, find, gt } from 'fkit'
 *
 * find(gt(1), []) // undefined
 * find(gt(1), [1, 2, 3]) // 2
 *
 * find(eq('o'), '') // undefined
 * find(eq('o'), 'foo') // 'o'
 */
export function find (p, as) {
  return head(filter(p, as))
}

export default curry(find)
