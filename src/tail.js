/**
 * Get the elements after the first element in a list.
 *
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the elements after the first
 * element in the list of `as`.
 * @example
 *
 * import { tail } from 'fkit'
 * tail([1, 2, 3]) // [2, 3]
 * tail('foo') // 'oo'
 */
export default function tail (as) {
  return as.slice(1)
}
