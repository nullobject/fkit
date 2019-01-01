import curry from './curry'

export function compare (a, b) {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
}

/**
 * Returns the ordering of the two values `a` and `b`.
 *
 * @summary Compares two values using natural ordering.
 *
 * @example
 *
 * F.compare(1, 2) // -1
 * F.compare(2, 1) // 1
 * F.compare(2, 2) // 0
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A number.
 */
export default curry(compare)
