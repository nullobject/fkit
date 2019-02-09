import curry from './curry'
import { filter } from './filter'

/**
 * Determines whether any elements in a list satisfy a predicate function.
 *
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Boolean} `true` if any elements in the list of `as` satisfy the
 * predicate function `p`, `false` otherwise.
 * @example
 *
 * import { any, eq, gt } from 'fkit'
 *
 * any(gt(1), [1, 2, 3]) // true
 * any(gt(1), [1, 2]) // true
 * any(gt(1), [1]) // false
 *
 * any(eq('o'), 'foo') // true
 * any(eq('o'), 'fo') // true
 * any(eq('o'), 'f') // false
 */
export function any (p, as) {
  return filter(p, as).length > 0
}

export default curry(any)
