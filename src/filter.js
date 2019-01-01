import always from './always'
import branch from './branch'
import curry from './curry'
import id from './id'
import isString from './internal/isString'
import { concatMap } from './concatMap'

export function filter (p, as) {
  const f = branch(p, id, always(''))
  return isString(as) ? concatMap(f, as) : as.filter(p)
}

/**
 * Returns a list that contains the elements in the list of `as` that satisfy
 * the predicate function `p`.
 *
 * @summary Filters a list using a predicate function.
 *
 * @example
 *
 * F.filter(F.gt(1), [1, 2, 3]) // [2, 3]
 * F.filter(F.eq('o'), 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(filter)
