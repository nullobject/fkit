import curry from './curry'

/**
 * Applies a method to three values.
 *
 * @param {String} k A method name.
 * @param a A value.
 * @param b A value.
 * @param c A value.
 * @param {Object} o An object.
 * @returns The result of the method `k` of object `o` applied to the values
 * `a`, `b`, and `c`.
 * @example
 *
 * import { applyMethod3 } from 'fkit'
 * const person = { sayHi: (a, b, c) => ['Hi', a, b, c, '!'].join(' ') }
 * applyMethod3('sayHi', 'Ms', 'Jane', 'Appleseed', person) // Hi Ms Jane Appleseed!
 */
export function applyMethod3 (k, a, b, c, o) {
  return o[k](a, b, c)
}

export default curry(applyMethod3)
