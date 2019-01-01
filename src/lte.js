import curry from './curry'

export function lte (a, b) {
  return b <= a
}

/**
 * Returns `true` if the value `a` is less than or equal to the value `b`,
 * false otherwise.
 *
 * @summary The less than or equal operator.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A boolean value.
 */
export default curry(lte)
