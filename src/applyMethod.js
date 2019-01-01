import curry from './curry'

/**
 * Returns the result of the method `k` of object `o` applied to the value `a`.
 *
 * @summary Applies a method to a value.
 *
 * @example
 *
 * var person = { sayHi: a => ['Hi', a, '!'].join(' ') }
 * F.applyMethod('sayHi', 'Jane', person) // Hi Jane!
 *
 * @curried
 * @function
 * @param k A string.
 * @param a A value.
 * @param o An object.
 * @returns A value.
 */
export default curry((k, a, o) => o[k](a))
