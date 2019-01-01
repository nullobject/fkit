/**
 * Returns a list that contains the elements before the last element in the
 * list of `as`.
 *
 * @summary Gets the elements before the last element in a list.
 *
 * @example
 *
 * F.init([1, 2, 3]) // [1, 2]
 * F.init('foo') // 'fo'
 *
 * @param as A list.
 * @returns A new list.
 */
export default function init (as) {
  return as.slice(0, as.length - 1)
}
