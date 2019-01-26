/**
 * Gets the length of a list.
 *
 * @param {Array|String} as A list.
 * @returns {Number} The number of elements in the list of `as`.
 * @example
 *
 * import { length } from 'fkit'
 * length([1, 2, 3]) // 3
 * length('foo') // 3
 */
export default function length (as) {
  return as.length
}
