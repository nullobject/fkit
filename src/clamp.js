import curry from './curry'
import max from './max'
import min from './min'

/**
 * Clamps the number `n` between the numbers `a` and `b` (i.e. a <= n <= b).
 *
 * @summary Clamps a number.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @param n A number.
 * @returns A number.
 */
export default curry((a, b, n) => max(a, min(n, b)))
