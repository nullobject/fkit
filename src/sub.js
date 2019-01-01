import curry from './curry'

/**
 * Returns the difference of two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b - a`.
 */
export function sub (a, b) {
  return b - a
}

export default curry(sub)
