import curry from './curry'

/**
 * Returns the logical OR of two values.
 *
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} The result of `b || a`.
 * @example
 *
 * import { or } from 'fkit'
 * or(false, true) // true
 * or(0, 1) // true
 * or('', 'foo') // true
 */
export function or (a, b) {
  return !!(b || a)
}

export default curry(or)
