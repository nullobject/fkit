import applyRight from './uncurried/applyRight'
import curry from './curry'

/**
 * Applies a function to a value. This is similar to `apply`, however the order
 * of the arguments is flipped.
 *
 * @function
 * @param a The value.
 * @param {Function} f The function to apply.
 * @returns The result of `f(a)`.
 * @example
 *
 * import { applyRight } from 'fkit'
 * function sayHi (a) { return ['Hi', a, '!'].join(' ') }
 * applyRight('Jane', sayHi) // Hi Jane!
 */
export default curry(applyRight)
