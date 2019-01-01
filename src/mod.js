import curry from './curry'

export function mod (a, b) {
  return b % a
}

/**
 * Returns the result of `b % a`.
 *
 * @summary The modulo operator.
 *
 * @curried
 * @function
 * @param a A number.
 * @param b A number.
 * @returns A number.
 */
export default curry(mod)
