import array from '../array'
import curry from '../curry'
import isString from '../internal/isString'
import randomInt from '../randomInt'
import string from '../string'
import { concatMap, concatWith, fold } from './fold'
import { take } from './sublist'

/**
 * This module defines operations for building lists.
 *
 * @private
 * @module fkit/list/build
 */

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
export const sample = curry((n, as) => take(n, shuffle(as)))

/**
 * Returns a list that contains the elements in the list of `as` randomly
 * shuffled using the [Fisher-Yates
 * algorithm](http://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @summary Shuffles a list.
 *
 * @example
 *
 * F.shuffle([1, 2, 3]) // [2, 3, 1]
 * F.shuffle('abc') // 'bca'
 *
 * @param as A list.
 * @returns A new list.
 */
export function shuffle (as) {
  let i = -1

  const f = (b, a) => {
    const j = randomInt(0, ++i)

    b[i] = b[j]
    b[j] = a

    return b
  }

  const r = array(as.length)
  const bs = fold(f, r, as)
  const s = isString(as) ? '' : []

  return concatWith(s, bs)
}
