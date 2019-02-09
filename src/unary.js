import apply from './apply'

/**
 * Converts a function of any arity to a unary function.
 *
 * @param {Function} f The function.
 * @returns {Function} A function that wraps the function `f` to accept only
 * one argument.
 * @example
 *
 * import { unary } from 'fkit'
 * function f (a) { ... }
 * const g = unary(f)
 * g(1, 2, 3) // f(1)
 */
export default function unary (f) {
  return (f.length === 1) ? f : apply(f)
}
