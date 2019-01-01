import curry from './curry'

/**
 * Generates a random integer.
 *
 * @param {Number} a A number.
 * @param {Number} b A number.
 * @returns {Number} A random integer between `a` and `b`.
 */
export function randomInt (a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}

export default curry(randomInt)
