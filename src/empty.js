/**
 * Determines if a list is empty.
 *
 * @param {Array|String} as A list.
 * @returns {Boolean} `true` if the list of `as` is empty, `false` otherwise.
 *
 * @example
 *
 * F.empty([]) // true
 * F.empty([1, 2, 3]) // false
 *
 * F.empty('') // true
 * F.empty('foo') // false
 */
export default function empty (as) {
  return as.length === 0
}
