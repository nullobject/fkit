import curry from './curry'

/**
 * Determines the smallest of two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The smallest of the numbers `a` and `b`.
 * @example
 *
 * import { min } from 'fkit'
 * min(1, 2) // 1
 */
export function min (a, b) {
  return a > b ? b : a
}

export default curry(min)
