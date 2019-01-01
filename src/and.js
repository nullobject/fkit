import curry from './curry'

/**
 * Returns the logical AND of two values.
 *
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} The result of `b && a`.
 *
 * @example
 *
 * F.and(true, true) // true
 * F.and(0, 1) // false
 * F.and('', 'foo') // false
 */
export function and (a, b) {
  return !!(b && a)
}

export default curry(and)
