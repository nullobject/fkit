import curry from './curry'

/**
 * Determines if a value is present in a list.
 *
 * @param a The value to find.
 * @param {Array|String} as The list.
 * @returns {Boolean} `true` if the list of `as` contains the value `a`,
 * `false` otherwise.
 * @example
 *
 * import { elem } from 'fkit'
 *
 * elem(0, [1, 2, 3]) // false
 * elem(1, [1, 2, 3]) // true
 *
 * elem('a', 'foo') // false
 * elem('o', 'foo') // true
 */
export function elem (a, as) {
  return as.indexOf(a) >= 0
}

export default curry(elem)
