import curry from './curry'

/**
 * Returns `true` if the value `a` is less than the value `b`, false otherwise.
 *
 * @summary The less than operator.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A boolean value.
 */
export default curry((a, b) => b < a)
