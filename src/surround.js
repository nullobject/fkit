import curry from './curry'
import { append } from './append'
import { prepend } from './prepend'

/**
 * Surrounds the list of `cs` with the values `a` and `b`.
 *
 * @param a The left value.
 * @param b The right value.
 * @param {Array|String} cs The list to surround.
 * @returns {Array|String} A new list.
 * @example
 *
 * import { surround } from 'fkit'
 * surround(0, 4, [1, 2, 3]) // [0, 1, 2, 3, 4]
 * surround('(', ')', 'foo') // '(foo)'
 */
export function surround (a, b, cs) {
  return append(b, prepend(a, cs))
}

export default curry(surround)
