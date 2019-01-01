import curry from './curry'

/**
 * Returns `true` if the value `a` is strictly equal (`===`) to the value `b`,
 * false otherwise.
 *
 * @summary The strict equality operator.
 *
 * @example
 *
 * F.equal(1, 1) // true
 * F.equal(1, 2) // false
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A boolean value.
 */
export default curry((a, b) => b === a)
