import curry from './curry'

export function applyMethod3 (k, a, b, c, o) {
  return o[k](a, b, c)
}

/**
 * Returns the result of the method `k` of object `o` applied to the values
 * `a`, `b`, and `c`.
 *
 * @summary Applies a method to three values.
 *
 * @example
 *
 * var person = { sayHi: (a, b, c) => ['Hi', a, b, c, '!'].join(' ') }
 * F.applyMethod3('sayHi', 'Ms', 'Jane', 'Appleseed', person) // Hi Ms Jane Appleseed!
 *
 * @curried
 * @function
 * @param k A string.
 * @param a A value.
 * @param b A value.
 * @param c A value.
 * @param o An object.
 * @returns A value.
 */
export default curry(applyMethod3)
