import append from './append'
import curry from './curry'
import prepend from './prepend'

export function surround (a, b, cs) {
  return append(b, prepend(a, cs))
}

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
export default curry(surround)
