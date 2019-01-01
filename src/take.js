import curry from './curry'
import isString from './internal/isString'

/**
 * Returns the prefix of `n` elements from the list of `as`.
 *
 * @summary Gets the prefix of a list.
 *
 * @example
 *
 * F.take(2, [1, 2, 3]) // [1, 2]
 * F.take(2, 'foo') // 'fo'
 *
 * @curried
 * @function
 * @param n A number.
 * @param as A list.
 * @returns A new list.
 */
export default curry((n, as) => {
  let s = isString(as) ? '' : []
  const m = as.length

  for (let i = 0; i < Math.min(m, n); i++) {
    s = s.concat(as[i])
  }

  return s
})
