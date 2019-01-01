import curry from './curry'

/**
 * Returns the result of the method `k` of object `o` applied to the values `a`
 * and `b`.
 *
 * @summary Applies a method to two values.
 *
 * @example
 *
 * var person = { sayHi: (a, b) => ['Hi', a, b, '!'].join(' ') }
 * F.applyMethod2('sayHi', 'Jane', 'Appleseed', person) // Hi Jane Appleseed!
 *
 * @curried
 * @function
 * @param k A string.
 * @param a A value.
 * @param b A value.
 * @param o An object.
 * @returns A value.
 */
export default curry((k, a, b, o) => o[k](a, b))
