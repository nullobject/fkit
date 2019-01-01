import curry from './curry'

export function apply2 (f, a, b) {
  return f(a, b)
}

/**
 * Returns the result of the function `f` applied to the values `a` and `b`.
 *
 * @summary Applies a function to two values.
 *
 * @example
 *
 * function sayHi (a, b) { return ['Hi', a, b, '!'].join(' ') }
 * F.apply2(sayHi, 'Jane', 'Appleseed') // Hi Jane Appleseed!
 *
 * @curried
 * @function
 * @param f A function.
 * @param a A value.
 * @param b A value.
 * @returns The result of `f(a, b)`.
 */
export default curry(apply2)
