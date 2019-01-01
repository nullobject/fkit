import curry from './curry'

/**
 * Determines whether one number is less than another.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Boolean} `true` if the number `b` is less than the number `a`,
 * false otherwise.
 */
export function lt (a, b) {
  return b < a
}

export default curry(lt)
