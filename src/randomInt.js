import curry from './curry'

export function randomInt (a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}

/**
 * Returns a random integer between `a` and `b`.
 *
 * @summary Generates a random integer.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export default curry(randomInt)
