import curry from './curry'
import isString from './internal/isString'

export function drop (n, as) {
  let s = isString(as) ? '' : []
  const m = as.length

  for (let i = n; i < m; i++) {
    s = s.concat(as[i])
  }

  return s
}

/**
 * Returns the suffix after dropping `n` elements from the list of `as`.
 *
 * @summary Gets the suffix of a list.
 *
 * @example
 *
 * F.drop(2, [1, 2, 3]) // [3]
 * F.drop(2, 'foo') // 'o'
 *
 * @curried
 * @function
 * @param n A number.
 * @param as A list.
 * @returns A new list.
 */
export default curry(drop)
