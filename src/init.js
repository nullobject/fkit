/**
 * Gets the elements before the last element in a list.
 *
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements before the last
 * element in the list of `as`.
 * @example
 *
 * import { init } from 'fkit'
 * init([1, 2, 3]) // [1, 2]
 * init('foo') // 'fo'
 */
export default function init (as) {
  return as.slice(0, as.length - 1)
}
