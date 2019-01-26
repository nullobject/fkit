import curry from './curry'

/**
 * Determines whether one number is less than or equal to another.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is less than or equal to the
 * number `a`, false otherwise.
 * @example
 *
 * import { lte } from 'fkit'
 * lte(1, 2) // false
 * lte(2, 1) // true
 * lte(2, 2) // true
 */
export function lte (a, b) {
  return b <= a
}

export default curry(lte)
