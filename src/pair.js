import curry from './curry'

/**
 * Returns an ordered pair with the values `a` and `b`.
 *
 * @summary Creates a new ordered pair.
 *
 * @example
 *
 * F.pair(1, 2) // [1, 2]
 * F.pair('a', 'b') // ['a', 'b']
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A new pair.
 */
export default curry((a, b) => [a, b])
