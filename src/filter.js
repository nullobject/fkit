import always from './always'
import branch from './branch'
import curry from './curry'
import id from './id'
import isString from './internal/isString'
import { concatMap } from './concatMap'

/**
 * Filters a list using a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains only the elements in the list
 * of `as` that satisfy the predicate function `p`.
 *
 * @example
 *
 * F.filter(F.gt(1), [1, 2, 3]) // [2, 3]
 * F.filter(F.eq('o'), 'foo') // 'oo'
 */
export function filter (p, as) {
  const f = branch(p, id, always(''))
  return isString(as) ? concatMap(f, as) : as.filter(p)
}

export default curry(filter)
