import curry from './curry'

/**
 * Determines whether one number is less than another.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is less than the number `a`,
 * false otherwise.
 * @example
 *
 * import { lt } from 'fkit'
 * lt(1, 2) // false
 * lt(2, 1) // true
 */
export function lt (a, b) {
  return b < a
}

export default curry(lt)
