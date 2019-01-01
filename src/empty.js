/**
 * Returns `true` if the list of `as` is empty, `false` otherwise.
 *
 * @summary Determines if a list is empty.
 *
 * @example
 *
 * F.empty([]) // true
 * F.empty([1, 2, 3]) // false
 *
 * F.empty('') // true
 * F.empty('foo') // false
 *
 * @param as A list.
 * @returns A boolean value.
 */
export default function empty (as) {
  return as.length === 0
}
