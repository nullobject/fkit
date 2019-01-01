import curry from './curry'

export function elem (a, as) {
  return as.indexOf(a) >= 0
}

/**
 * Returns `true` if the list of `as` contains the element `a`, `false`
 * otherwise.
 *
 * @summary Determines if a value is present in a list.
 *
 * @example
 *
 * F.elem(0, [1, 2, 3]) // false
 * F.elem(1, [1, 2, 3]) // true
 *
 * F.elem('a', 'foo') // false
 * F.elem('o', 'foo') // true
 *
 * @curried
 * @function
 * @param a A value.
 * @param as A list.
 * @returns A boolean value.
 */
export default curry(elem)
