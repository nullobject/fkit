import curry from './curry'
/**
 * Applies a function to three values.
 *
 * @param {Function} f A function.
 * @param a A value.
 * @param b A value.
 * @param c A value.
 * @returns The result of `f(a, b, c)`.
 *
 * @example
 *
 * function sayHi (a, b, c) { return ['Hi', a, b, c, '!'].join(' ') }
 * F.apply3(sayHi, 'Ms', 'Jane', 'Appleseed') // Hi Ms Jane Appleseed!
 */
export function apply3 (f, a, b, c) {
  return f(a, b, c)
}

export default curry(apply3)
