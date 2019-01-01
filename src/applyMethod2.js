import curry from './curry'

/**
 * Applies a method to two values.
 *
 * @param {String} k A method name.
 * @param a A value.
 * @param b A value.
 * @param {Object} o An object.
 * @returns The result of the method `k` of object `o` applied to the values
 *
 * @example
 *
 * var person = { sayHi: (a, b) => ['Hi', a, b, '!'].join(' ') }
 * F.applyMethod2('sayHi', 'Jane', 'Appleseed', person) // Hi Jane Appleseed!
 * `a` and `b`.
 */
export function applyMethod2 (k, a, b, o) {
  return o[k](a, b)
}

export default curry(applyMethod2)
