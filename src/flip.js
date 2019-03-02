/**
 * Swaps the order of the arguments to a function.
 *
 * @param {Function} f The function.
 * @returns {Function} A new function which calls `f` with the arguments swapped.
 * @example
 *
 * import { flip } from 'fkit'
 * function f (a, b) { ... }
 * const g = flip(f)
 * g(1, 2) // f(2, 1)
 */
export default function flip (f) {
  return (a, b) => f(b, a)
}
