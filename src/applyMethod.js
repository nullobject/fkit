import curry from './curry'

/**
 * Applies a method to a value.
 *
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
export function applyMethod (k, a, o) {
  return o[k](a)
}

export default curry(applyMethod)
