import curry from './curry'

/**
 * Swaps the order of the arguments to a function.
 *
 * @param {Function} f A function.
 * @param a A value.
 * @param b A value.
 * @returns {Function} The result of applying the function `f` to the values
 * `b` and `a`.
 * @example
 *
 * import { flip } from 'fkit'
 * function f (a, b) { ... }
 * const g = flip(f)
 * g(1, 2) // f(2, 1)
 */
export function flip (f, a, b) {
  return f(b, a)
}

export default curry(flip)
