import curry from './curry'
import drop from './drop'
import take from './take'

/**
 * Returns a list that contains the elements in the list of `as` split into a
 * pair of lists: a prefix of length `n` and the remainder of the list.
 *
 * @summary Splits a list.
 *
 * @example
 *
 * F.splitAt(1, [1, 2, 3]) // [[1], [2, 3]]
 * F.splitAt(1, 'foo') // ['f', 'oo']
 *
 * @curried
 * @function
 * @param n A number.
 * @param as A list.
 * @returns A pair of lists.
 */
export default curry((n, as) => [take(n, as), drop(n, as)])
