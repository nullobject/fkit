import curry from './curry'
import dropWhile from './uncurried/dropWhile'

/**
 * Drops elements from the start of a list using a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that drops elements from the list of `as`
 * while the predicate function `p` is satisfied.
 * @example
 *
 * import { dropWhile, lt, neq } from 'fkit'
 * dropWhile(lt(3), [1, 2, 3]) // [3]
 * dropWhile(neq(o), 'foo') // 'oo'
 */
export default curry(dropWhile)
