import curry from './curry'

/**
 * Determines if a value is present in a list.
 *
 * @param a A value.
 * @param {Array|String} as A list.
 * @returns {Boolean} `true` if the list of `as` contains the value `a`,
 * `false` otherwise.
 *
 * @example
 *
 * F.elem(0, [1, 2, 3]) // false
 * F.elem(1, [1, 2, 3]) // true
 *
 * F.elem('a', 'foo') // false
 * F.elem('o', 'foo') // true
 */
export function elem (a, as) {
  return as.indexOf(a) >= 0
}

export default curry(elem)
