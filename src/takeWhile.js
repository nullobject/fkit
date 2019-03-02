import curry from './curry'
import takeWhile from './uncurried/takeWhile'

/**
 * Gets the prefix of a list using a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that takes the elements from the list of `as`
 * while the predicate function `p` is satisfied.
 * @example
 *
 * import { lt, neq, takeWhile } from 'fkit'
 * takeWhile(lt(3), [1, 2, 3]) // [1, 2]
 * takeWhile(neq(o), 'foo') // 'f'
 */
export default curry(takeWhile)
