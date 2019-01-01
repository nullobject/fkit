/**
 * Gets the last element in a list.
 *
 * @param {Array|String} as A list.
 * @returns The last element in the list of `as`, or `undefined` if the list is empty.
 *
 * @example
 *
 * F.last([1, 2, 3]) // 3
 * F.last('foo') // 'o'
 */
export default function last (as) {
  return as[as.length - 1]
}
