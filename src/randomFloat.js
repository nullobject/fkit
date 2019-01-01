import curry from './curry'

/**
 * Generates a random float.
 *
 * @param {Number} a A number.
 * @param {Number} b A number.
 * @returns {Number} A random float between `a` and `b`.
 */
export function randomFloat (a, b) {
  return (Math.random() * (b - a)) + a
}

export default curry(randomFloat)
