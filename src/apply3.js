import curry from './curry'

export function apply3 (f, a, b, c) {
  return f(a, b, c)
}

/**
 * Returns the result of the function `f` applied to the values `a`, `b`, and
 * `c`.
 *
 * @summary Applies a function to three values.
 *
 * @example
 *
 * function sayHi (a, b, c) { return ['Hi', a, b, c, '!'].join(' ') }
 * F.apply3(sayHi, 'Ms', 'Jane', 'Appleseed') // Hi Ms Jane Appleseed!
 *
 * @curried
 * @function
 * @param f A function.
 * @param a A value.
 * @param b A value.
 * @param c A value.
 * @returns The result of `f(a, b, c)`.
 */
export default curry(apply3)