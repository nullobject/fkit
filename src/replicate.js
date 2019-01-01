import array from './array'
import concatMap from './concatMap'
import curry from './curry'
import isString from './internal/isString'
import string from './string'

/**
 * Returns a list of length `n` with `a` the value of every element.
 *
 * @summary Replicates a value.
 *
 * @example
 *
 * F.replicate(3, 1) // [1, 1, 1]
 * F.replicate(3, 'a') // 'aaa'
 *
 * @curried
 * @function
 * @param n A number.
 * @param a A value.
 * @returns A new list.
 */
export default curry((n, a) => {
  const as = isString(a) ? string(n) : array(n)
  return concatMap(() => [a], as)
})
