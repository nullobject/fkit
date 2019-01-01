import curry from './curry'

/**
 * Returns the sum of two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b + a`.
 */
export function add (a, b) {
  return b + a
}

export default curry(add)
