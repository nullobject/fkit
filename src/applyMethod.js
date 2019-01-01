import curry from './curry'

/**
 * Applies a method to a value.
 *
 * @param {String} k A method name.
 * @param a A value.
 * @param {Object} o An object.
 * @returns The result of the method `k` of object `o` applied to the value
 * `a`.
 *
 * @example
 *
 * var person = { sayHi: a => ['Hi', a, '!'].join(' ') }
 * F.applyMethod('sayHi', 'Jane', person) // Hi Jane!
 */
export function applyMethod (k, a, o) {
  return o[k](a)
}

export default curry(applyMethod)
