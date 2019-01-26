import curry from './curry'

/**
 * Compares two values using natural ordering.
 *
 * This function compares two elements, `a` and `b`. If `a` is greater than
 * `b`, then it returns `1`. If `a` is less than `b`, then it returns `-1`. If
 * both elements are equal, then it returns `0`.
 *
 * @param a A value.
 * @param b A value.
 * @returns {Number} The result.
 * @example
 *
 * import { compare } from 'fkit'
 * compare(2, 1) // 1
 * compare(1, 2) // -1
 * compare(2, 2) // 0
 */
export function compare (a, b) {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
}

export default curry(compare)
