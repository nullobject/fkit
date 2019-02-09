/**
 * Returns a function that always returns the same value, regardless of the
 * arguments.
 *
 * @param c The constant value.
 * @returns {Function} A function that always returns the value `c`.
 * @example
 *
 * import { always } from 'fkit'
 * always(1)() // 1
 */
export default function always (c) {
  return () => c
}
