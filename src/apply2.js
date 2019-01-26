import curry from './curry'

/**
 * Applies a function to two values.
 *
 * @param {Function} f A function.
 * @param a A value.
 * @param b A value.
 * @returns The result of `f(a, b)`.
 * @example
 *
 * import { apply2 } from 'fkit'
 * const sayHi = (a, b) => ['Hi', a, b, '!'].join(' ')
 * apply2(sayHi, 'Jane', 'Appleseed') // Hi Jane Appleseed!
 */
export function apply2 (f, a, b) {
  return f(a, b)
}

export default curry(apply2)
