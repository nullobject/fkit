/**
 * Returns the last element in the list of `as`.
 *
 * @summary Gets the last element in a list.
 *
 * @example
 *
 * F.last([1, 2, 3]) // 3
 * F.last('foo') // 'o'
 *
 * @param as A list.
 * @returns A value or `undefined` if the list is empty.
 */
export default function last (as) {
  return as[as.length - 1]
}
