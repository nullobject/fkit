/**
 * Determines if a list is empty.
 *
 * @param {Array|String} as The list.
 * @returns {Boolean} `true` if the list of `as` is empty, `false` otherwise.
 * @example
 *
 * import { empty } from 'fkit'
 *
 * empty([]) // true
 * empty([1, 2, 3]) // false
 *
 * empty('') // true
 * empty('foo') // false
 */
export default function empty (as) {
  return as.length === 0
}
