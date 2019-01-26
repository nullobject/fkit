import curry from './curry'
import isString from './internal/isString'

/**
 * Takes a number of elements from the start of a list.
 *
 * @param {Number} n The number of elements to take.
 * @param {Array|String} as A list.
 * @returns {Array|String} The result after taking `n` elements from the list
 * of `as`.
 * @example
 *
 * import { take } from 'fkit'
 * take(2, [1, 2, 3]) // [1, 2]
 * take(2, 'foo') // 'fo'
 */
export function take (n, as) {
  let s = isString(as) ? '' : []
  const m = as.length

  for (let i = 0; i < Math.min(m, n); i++) {
    s = s.concat(as[i])
  }

  return s
}

export default curry(take)
