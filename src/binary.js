import apply2 from './apply2'

/**
 * Returns a function that wraps the function `f` to accept only two arguments.
 * Any other arguments will be ignored.
 *
 * @summary Converts a function to a binary function.
 *
 * @example
 *
 * function f () { ... }
 * const g = F.binary(f)
 * g(1, 2, 3) // f(1, 2)
 *
 * @param f A function.
 * @returns A new function.
 */
export default function binary (f) {
  return (f.length === 2) ? f : apply2(f)
}
