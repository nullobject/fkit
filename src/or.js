import curry from './curry'

/**
 * Returns true if either `a` or `b` are truthy, false otherwise.
 *
 * @summary The logical OR operator.
 *
 * @example
 *
 * F.or(false, true) // true
 * F.or(0, 1) // true
 * F.or('', 'foo') // true
 *
 * @curried
 * @function
 * @param a A boolean value.
 * @param b A boolean value.
 * @returns A boolean value.
 */
export default curry((a, b) => !!(b || a))
