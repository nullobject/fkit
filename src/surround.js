import append from './append'
import curry from './curry'
import prepend from './prepend'

/**
 * Surrounds the list of `cs` with the values `a` and `b`.
 *
 * @example
 *
 * F.surround(0, 4, [1, 2, 3]) // [0, 1, 2, 3, 4]
 * F.surround('(', ')', 'foo') // '(foo)'
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @param cs A list.
 * @returns A new list.
 */
export default curry((a, b, cs) => append(b, prepend(a, cs)))
