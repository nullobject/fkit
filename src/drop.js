import curry from './curry'
import isString from './internal/isString'

/**
 * Drops a number of elements from the start of a list.
 *
 * @param {Number} n The number of elements to drop.
 * @param {Array|String} as A list.
 * @returns {Array|String} The result after dropping `n` elements from the list
 * of `as`.
 *
 * @example
 *
 * F.drop(2, [1, 2, 3]) // [3]
 * F.drop(2, 'foo') // 'o'
 */
export function drop (n, as) {
  let s = isString(as) ? '' : []
  const m = as.length

  for (let i = n; i < m; i++) {
    s = s.concat(as[i])
  }

  return s
}

export default curry(drop)
