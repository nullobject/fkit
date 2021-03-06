import applyMethod3 from './uncurried/applyMethod3'
import curry from './curry'

/**
 * Applies a method to three values.
 *
 * @function
 * @param {String} k The method to apply.
 * @param a The first value.
 * @param b The second value.
 * @param c The third value.
 * @param {Object} o The object.
 * @returns The result of the method `k` of object `o` applied to the values
 * `a`, `b`, and `c`.
 * @example
 *
 * import { applyMethod3 } from 'fkit'
 * const person = { sayHi: (a, b, c) => ['Hi', a, b, c, '!'].join(' ') }
 * applyMethod3('sayHi', 'Ms', 'Jane', 'Appleseed', person) // Hi Ms Jane Appleseed!
 */
export default curry(applyMethod3)
