import curry from './curry'

/**
 * Retruns true if the number `n` is between the numbers `a` and `b` (i.e. a <=
 * n <= b), false otherwise.
 *
 * @summary The between operator.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @param n A number.
 * @returns A number.
 */
export default curry((a, b, n) => a <= n && b >= n)
