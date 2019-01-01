import curry from './curry'

/**
 * Returns the division of two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b / a`.
 */
export function div (a, b) {
  return b / a
}

export default curry(div)
