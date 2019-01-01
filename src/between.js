import curry from './curry'

/**
 * Determines whether a number is between two numbers.
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @param {Number} n The number to test.
 * @returns {Number} `true` if the number `n` is between the numbers `a` and
 * `b` (i.e. a <= n <= b), `false` otherwise.
 *
 */
export function between (a, b, n) {
  return a <= n && b >= n
}

export default curry(between)
