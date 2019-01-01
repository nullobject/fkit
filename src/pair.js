import curry from './curry'

/**
 * Creates a new ordered pair.
 *
 * @param a A value.
 * @param b A value.
 * @returns {Array} An ordered pair with the values `a` and `b`.
 *
 * @example
 *
 * F.pair(1, 2) // [1, 2]
 * F.pair('a', 'b') // ['a', 'b']
 */
export function pair (a, b) {
  return [a, b]
}

export default curry(pair)
