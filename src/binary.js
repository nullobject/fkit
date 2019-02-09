import apply2 from './apply2'

/**
 * Converts a function of any arity to a binary function.
 *
 * @param {Function} f The function.
 * @returns {Function} A function that wraps the function `f` to accept only
 * two arguments.
 * @example
 *
 * import { binary } from 'fkit'
 * function f (a, b) { ... }
 * const g = binary(f)
 * g(1, 2, 3) // f(1, 2)
 */
export default function binary (f) {
  return (f.length === 2) ? f : apply2(f)
}
