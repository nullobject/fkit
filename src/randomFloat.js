import curry from './curry'

export function randomFloat (a, b) {
  return (Math.random() * (b - a)) + a
}

/**
 * Returns a random float between `a` and `b`.
 *
 * @summary Generates a random float.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export default curry(randomFloat)
