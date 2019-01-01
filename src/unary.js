import apply from './apply'

/**
 * Returns a function that wraps the function `f` to accept only one argument.
 * Any other arguments will be ignored.
 *
 * @summary Converts a function to a unary function.
 *
 * @example
 *
 * function f () { ... }
 * const g = F.unary(f)
 * g(1, 2, 3) // f(1)
 *
 * @param f A function.
 * @returns A new function.
 */
export default function unary (f) {
  return (f.length === 1) ? f : apply(f)
}
