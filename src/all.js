import curry from './curry'
import { filter } from './filter'

/**
 * Determines whether all elements in a list satisfy a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Boolean} `true` if all elements of the list of `as` satisfy the
 * predicate, `false` otherwise.
 *
 * @example
 *
 * F.all(F.gt(1), [1, 2, 3]) // false
 * F.all(F.gt(1), [2, 3]) // true
 * F.all(F.gt(1), [3]) // true
 *
 * F.all(F.eq('o'), 'foo') // false
 * F.all(F.eq('o'), 'oo') // true
 * F.all(F.eq('o'), 'o') // true
 */
export function all (p, as) {
  return filter(p, as).length === as.length
}

export default curry(all)
