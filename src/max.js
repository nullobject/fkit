import curry from './curry'

/**
 * Returns the largest of the numbers `a` and `b`.
 *
 * @summary Determines the largest of two numbers.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export default curry((a, b) => b > a ? b : a)
