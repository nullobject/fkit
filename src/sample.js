import curry from './curry'
import shuffle from './shuffle'
import { take } from './take'

export function sample (n, as) {
  return take(n, shuffle(as))
}

/**
 * Returns a list of `n` elements randomly sampled from the list of `as`.
 *
 * @summary Samples random elements from a list.
 *
 * @example
 *
 * F.sample(2, [1, 2, 3]) // [3, 1]
 * F.sample(2, 'abc') // 'ca'
 *
 * @curried
 * @function
 * @param n A number.
 * @param as A list.
 * @returns A new list.
 */
export default curry(sample)