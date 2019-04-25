import curry from './curry'
import eqBy from './uncurried/eqBy'

/**
 * Determines whether the given values are equal. The function `f` is applied to
 * the values _before_ they are compared.
 *
 * @function
 * @param {Function} f The function to apply to the values before comparing
 * them.
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} `true` if the value `f(a)` is strictly equal (`===`) to
 * the value `f(b)`, false otherwise.
 * @example
 *
 * import { eqBy } from 'fkit'
 * eqBy(1, 1) // true
 * eqBy(1, 2) // false
 */
export default curry(eqBy)
