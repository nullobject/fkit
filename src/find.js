import curry from './curry'
import filter from './filter'
import head from './head'

export function find (p, as) {
  return head(filter(p, as))
}

/**
 * Returns an element in the list of `as` that satisfies the predicate function
 * `p`.
 *
 * @summary Finds an element in a list that satisfies a predicate function.
 *
 * @example
 *
 * F.find(F.gt(1), []) // undefined
 * F.find(F.gt(1), [1, 2, 3]) // 2
 *
 * F.find(F.eq('o'), '') // undefined
 * F.find(F.eq('o'), 'foo') // 'o'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A value or `undefined` if no value was found.
 */
export default curry(find)
