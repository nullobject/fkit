/**
 * Converts a binary function to a function on pairs.
 *
 * @param {Function} f The function.
 * @returns {Function} A function that wraps the binary function `f` to accept
 * a pair.
 * @example
 *
 * import { uncurry } from 'fkit'
 * const add = uncurry((a, b) => a + b)
 * add([1, 2]) // 3
 */
export default function uncurry (f) {
  return p => f(p[0], p[1])
}
