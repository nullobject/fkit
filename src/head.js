/**
 * Gets the first element in a list.
 *
 * @param {Array|String} as The list.
 * @returns The first element in the list of `as`, or `undefined` if the list
 * is empty.
 * @example
 *
 * import { head } from 'fkit'
 * head([1, 2, 3]) // 1
 * head('foo') // 'f'
 */
export default function head (as) {
  return as[0]
}
