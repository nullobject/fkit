/**
 * Gets the first element in a list.
 *
 * @param {Array|String} as A list or string.
 * @returns The first element in the list of `as`, or `undefined` if the list
 * is empty.
 *
 * @example
 *
 * F.head([1, 2, 3]) // 1
 * F.head('foo') // 'f'
 */
export default function head (as) {
  return as[0]
}
