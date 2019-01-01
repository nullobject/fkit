import curry from './curry'

export function min (a, b) {
  return a > b ? b : a
}

/**
 * Returns the smallest of the numbers `a` and `b`.
 *
 * @summary Determines the smallest of two numbers.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export default curry(min)
