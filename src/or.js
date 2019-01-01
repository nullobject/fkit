import curry from './curry'

/**
 * Returns the logical OR of two values.
 *
 * @param a The first value.
 * @param b The second value.
 * @returns {Boolean} The result of `b || a`.
 *
 * @example
 *
 * F.or(false, true) // true
 * F.or(0, 1) // true
 * F.or('', 'foo') // true
 */
export function or (a, b) {
  return !!(b || a)
}

export default curry(or)
