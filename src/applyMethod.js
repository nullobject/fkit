import applyMethod from './uncurried/applyMethod'
import curry from './curry'

/**
 * Applies a method to a value.
 *
 * @function
 * @param {String} k The method to apply.
 * @param a The value.
 * @param {Object} o The object.
 * @returns The result of the method `k` of object `o` applied to the value
 * `a`.
 * @example
 *
 * import { applyMethod } from 'fkit'
 * const person = { sayHi: a => ['Hi', a, '!'].join(' ') }
 * applyMethod('sayHi', 'Jane', person) // Hi Jane!
 */
export default curry(applyMethod)
