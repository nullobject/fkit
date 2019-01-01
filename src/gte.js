import curry from './curry'

/**
 * Determines whether one number is greater than or equal to another.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is greater than or euqal to the
 * number `a`, false otherwise.
 */
export function gte (a, b) {
  return b >= a
}

export default curry(gte)
