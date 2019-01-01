import curry from './curry'

export function gt (a, b) {
  return b > a
}

/**
 * Returns `true` if the value `a` is greater than the value `b`, false
 * otherwise.
 *
 * @summary The greater than operator.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A boolean value.
 */
export default curry(gt)
