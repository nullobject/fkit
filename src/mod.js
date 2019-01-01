import curry from './curry'

/**
 * Returns the modulo of two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @returns {Number} The result of `b % a`.
 */
export function mod (a, b) {
  return b % a
}

export default curry(mod)
