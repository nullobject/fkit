import curry from './curry'
/**
 * Applies a function to three values.
 *
 * @param {Function} f The function to apply.
 * @param a The first value.
 * @param b The second value.
 * @param c The third value.
 * @returns The result of `f(a, b, c)`.
 * @example
 *
 * import { apply3 } from 'fkit'
 * const sayHi = (a, b, c) => ['Hi', a, b, c, '!'].join(' ')
 * apply3(sayHi, 'Ms', 'Jane', 'Appleseed') // Hi Ms Jane Appleseed!
 */
export function apply3 (f, a, b, c) {
  return f(a, b, c)
}

export default curry(apply3)
