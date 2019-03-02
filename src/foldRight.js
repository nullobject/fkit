import curry from './curry'
import foldRight from './uncurried/foldRight'

/**
 * Folds a list from right-to-left with a function.
 *
 * @function
 * @param {Function} f The folding function.
 * @param s The starting value.
 * @param {Array|String} as The list to fold.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` folded right-to-left with the binary function `f` and starting value
 * `s`.
 * @example
 *
 * import { foldRight } from 'fkit'
 * foldRight((b, a) => a.concat(b), [], [1, 2, 3]) // [3, 2, 1]
 * foldRight((b, a) => a.concat(b), '', 'foo') // 'oof'
 */
export default curry(foldRight)
