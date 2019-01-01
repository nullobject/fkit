import curry from './curry'
import { filter } from './filter'

/**
 * Determines whether any elements in a list satisfy a predicate function.
 *
 * @param {Function} p A predicate function.
 * @param {Array|String} as A list.
 * @returns {Boolean} `true` if any elements in the list of `as` satisfy the predicate
 *
 * @example
 *
 * F.any(F.gt(1), [1, 2, 3]) // true
 * F.any(F.gt(1), [1, 2]) // true
 * F.any(F.gt(1), [1]) // false
 *
 * F.any(F.eq('o'), 'foo') // true
 * F.any(F.eq('o'), 'fo') // true
 * F.any(F.eq('o'), 'f') // false
 * function `p`, `false` otherwise.
 */
export function any (p, as) {
  return filter(p, as).length > 0
}

export default curry(any)
