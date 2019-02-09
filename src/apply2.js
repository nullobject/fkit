import curry from './curry'

/**
 * Applies a function to two values.
 *
 * @param {Function} f The function to apply.
 * @param a The first value.
 * @param b The second value.
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
