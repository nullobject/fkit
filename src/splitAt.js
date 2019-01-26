import curry from './curry'
import { drop } from './drop'
import { take } from './take'

/**
 * Splits a list.
 *
 * @param {Number} n A number.
 * @param {Array|String} as A list.
 * @returns {Array} A list that contains the elements in the list of `as` split
 * into a pair of lists: a prefix of length `n` and the remainder of the list.
 * @example
 *
 * import { splitAt } from 'fkit'
 * splitAt(1, [1, 2, 3]) // [[1], [2, 3]]
 * splitAt(1, 'foo') // ['f', 'oo']
 */
export function splitAt (n, as) {
  return [take(n, as), drop(n, as)]
}

export default curry(splitAt)
