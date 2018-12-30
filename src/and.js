import curry from './curry'

/**
 * Returns true if both `a` and `b` are truthy, false otherwise.
 *
 * @summary The logical AND operator.
 *
 * @example
 *
 * F.and(true, true) // true
 * F.and(0, 1) // false
 * F.and('', 'foo') // false
 *
 * @curried
 * @function
 * @param a A boolean value.
 * @param b A boolean value.
 * @returns A boolean value.
 */
export default curry((a, b) => !!(b && a))
