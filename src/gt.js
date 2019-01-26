import curry from './curry'

/**
 * Determines whether one number is greater than another.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is greater than the number `a`,
 * false otherwise.
 * @example
 *
 * import { gt } from 'fkit'
 * gt(1, 2) // true
 * gt(2, 1) // false
 */
export function gt (a, b) {
  return b > a
}

export default curry(gt)
