import curry from './curry'

/**
 * Determines whether one number is greater than another.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is greater than the number `a`,
 * false otherwise.
 */
export function gt (a, b) {
  return b > a
}

export default curry(gt)
