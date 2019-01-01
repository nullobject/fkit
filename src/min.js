import curry from './curry'

/**
 * Determines the smallest of two numbers.
 *
 * @param {Number} a A number.
 * @param {Number} b A number.
 * @returns {Number} The smallest of the numbers `a` and `b`.
 */
export function min (a, b) {
  return a > b ? b : a
}

export default curry(min)
