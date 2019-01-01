import array from './array'
import curry from './curry'
import isString from './internal/isString'
import string from './string'
import { concatMap } from './concatMap'

/**
 * Replicates a value.
 *
 * @param {Number} n A number.
 * @param a A value.
 * @returns {Array|String} A list of length `n` with `a` the value of every
 * element.
 *
 * @example
 *
 * F.replicate(3, 1) // [1, 1, 1]
 * F.replicate(3, 'a') // 'aaa'
 */
export function replicate (n, a) {
  const as = isString(a) ? string(n) : array(n)
  return concatMap(() => [a], as)
}

export default curry(replicate)
