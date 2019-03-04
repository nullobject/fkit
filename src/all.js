import all from './uncurried/all'
import curry from './curry'

/**
 * Determines whether all elements in a list satisfy a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Boolean} `true` if all elements of the list of `as` satisfy the
 * predicate, `false` otherwise.
 * @example
 *
 * import { all, eq, gt } from 'fkit'
 *
 * all(gt(1), [1, 2, 3]) // false
 * all(gt(1), [2, 3]) // true
 * all(gt(1), [3]) // true
 *
 * all(eq('o'), 'foo') // false
 * all(eq('o'), 'oo') // true
 * all(eq('o'), 'o') // true
 */
export default curry(all)
