/**
 * Returns the first element in the list of `as`.
 *
 * @summary Gets the first element in a list.
 *
 * @example
 *
 * F.head([1, 2, 3]) // 1
 * F.head('foo') // 'f'
 *
 * @param as A list.
 * @returns A value or `undefined` if the list is empty.
 */
export default function head (as) { return as[0] }
