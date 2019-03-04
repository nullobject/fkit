import curry from './curry'
import span from './uncurried/span'

/**
 * Splits a list using a predicate function.
 *
 * @function
 * @param {Function} p The predicate function.
 * @param {Array|String} as The list.
 * @returns {Array} A list that contains the elements in the list of `as` split
 * into a pair of lists: a prefix of elements that satisfy the predicate
 * function `p` and the remainder of the list.
 * @example
 *
 * import { lt, neq, span } from 'fkit'
 * span(lt(3), [1, 2, 3]) // [[1, 2], [3]]
 * span(neq(o), 'foo') // ['f', 'oo']
 */
export default curry(span)
