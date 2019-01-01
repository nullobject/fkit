import curry from './curry'
import shuffle from './shuffle'
import { take } from './take'

/**
 * Samples random elements from a list.
 *
 * @param {Number} n The number of elements to sample.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list of `n` elements randomly sampled from the
 * list of `as`.
 *
 * @example
 *
 * F.sample(2, [1, 2, 3]) // [3, 1]
 * F.sample(2, 'abc') // 'ca'
 */
export function sample (n, as) {
  return take(n, shuffle(as))
}

export default curry(sample)
