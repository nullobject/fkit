import curry from './curry'

/**
 * Returns the product of two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b * a`.
 * @example
 *
 * import { mul } from 'fkit'
 * mul(2, 3) // 6
 */
export function mul (a, b) {
  return b * a
}

export default curry(mul)
