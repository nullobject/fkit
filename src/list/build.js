import curry from '../curry'
import randomInt from '../randomInt'
import { isString } from './base'
import { concatMap, concatWith, fold } from './fold'
import { take } from './sublist'

/**
 * This module defines operations for building lists.
 *
 * @private
 * @module fkit/list/build
 */

/**
 * Returns an array of length `n`.
 *
 * @summary Creates a new array.
 *
 * @example
 *
 * F.array(3) // [undefined, undefined, undefined]
 *
 * @param n A number.
 * @returns A new array.
 */
export function array (n) { return Array.apply(null, Array(n)) }

/**
 * Returns an string of length `n`.
 *
 * @summary Creates a new string.
 *
 * @example
 *
 * F.string(3) // '   '
 *
 * @param n A number.
 * @returns A new string.
 */
export function string (n) { return array(n + 1).join(' ') }

/**
 * Returns an ordered pair with the values `a` and `b`.
 *
 * @summary Creates a new ordered pair.
 *
 * @example
 *
 * F.pair(1, 2) // [1, 2]
 * F.pair('a', 'b') // ['a', 'b']
 *
 * @curried
 * @function
 * @param a A value.
 * @param b A value.
 * @returns A new pair.
 */
export const pair = curry((a, b) => [a, b])

/**
 * Returns an array of numbers of length `n` starting from `a`.
 *
 * @summary Creates a new array of numbers.
 *
 * @example
 *
 * F.range(1, 3) // [1, 2, 3]
 *
 * @curried
 * @function
 * @param a A number.
 * @param n A number.
 * @returns A new array.
 */
export const range = curry((a, n) => array(n).map((_, i) => a + i))

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
export const replicate = curry((n, a) => {
  const as = isString(a) ? string(n) : array(n)
  return concatMap(() => [a], as)
})

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
