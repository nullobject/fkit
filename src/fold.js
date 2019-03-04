import curry from './curry'
import fold from './uncurried/fold'

/**
 * Folds a list from left-to-right with a function.
 *
 * @function
 * @param {Function} f The folding function.
 * @param s The starting value.
 * @param {Array|String} as The list to fold.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` folded left-to-right with the binary function `f` and starting value
 * `s`.
 * @example
 *
 * import { fold } from 'fkit'
 * fold((a, b) => a.concat(b), [], [1, 2, 3]) // [1, 2, 3]
 * fold((a, b) => a.concat(b), '', 'foo') // 'foo'
 */
export default curry(fold)
