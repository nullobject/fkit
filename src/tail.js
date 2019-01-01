/**
 * Returns a list that contains the elements after the first element in the
 * list of `as`.
 *
 * @summary Get the elements after the first element in a list.
 *
 * @example
 *
 * F.tail([1, 2, 3]) // [2, 3]
 * F.tail('foo') // 'oo'
 *
 * @param as A list.
 * @returns A new list.
 */
export default function tail (as) { return as.slice(1) }
