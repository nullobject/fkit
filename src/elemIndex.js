import curry from './curry'

export function elemIndex (a, as) {
  const i = as.indexOf(a)
  return (i >= 0) ? i : undefined
}
/**
 * Returns the index of the first occurance of the element `a` in the list of
 * `as`.
 *
 * @summary Gets the index of the first occurance of an element in a list.
 *
 * @example
 *
 * F.elemIndex(0, [1, 2, 3]) // undefined
 * F.elemIndex(1, [1, 2, 3]) // 0
 *
 * F.elemIndex('a', 'foo') // undefined
 * F.elemIndex('o', 'foo') // 1
 *
 * @curried
 * @function
 * @param a A value.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export default curry(elemIndex)
