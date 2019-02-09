import curry from './curry'

/**
 * Applies a method to two values.
 *
 * @param {String} k The method to apply.
 * @param a The first value.
 * @param b The second value.
 * @param {Object} o The object.
 * @returns The result of the method `k` of object `o` applied to the values
 * `a` and `b`.
 * @example
 *
 * import { applyMethod2 } from 'fkit'
 * const person = { sayHi: (a, b) => ['Hi', a, b, '!'].join(' ') }
 * applyMethod2('sayHi', 'Jane', 'Appleseed', person) // Hi Jane Appleseed!
 */
export function applyMethod2 (k, a, b, o) {
  return o[k](a, b)
}

export default curry(applyMethod2)
