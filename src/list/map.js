import concat from '../concat'
import curry from '../curry'
import empty from '../empty'
import flip from '../flip'
import head from '../head'
import mempty from '../internal/mempty'
import prepend from '../prepend'
import tail from '../tail'
import toArray from '../internal/toArray'

/**
 * This module defines map operations on lists.
 *
 * @private
 * @module fkit/list/map
 */

/**
 * Returns a list that contains the elements in the list of `as` mapped with
 * the function `f`.
 *
 * @summary Maps a function over a list.
 *
 * @example
 *
 * F.map(F.inc, [1, 2, 3]) // [2, 3, 4]
 * F.map(F.toUpper, 'foo') // ['F', 'O', 'O']
 *
 * @curried
 * @function
 * @param f A function.
 * @param as A list.
 * @returns A new list.
 */
export const map = curry((f, as) => toArray(as).map(f))

/**
 * Returns a list that contains the elements in the list of `as` in reverse
 * order.
 *
 * @summary Reverses the elements in a list.
 *
 * @example
 *
 * F.reverse([1, 2, 3]) // [3, 2, 1]
 * F.reverse('foo') // 'oof'
 *
 * @param as A list.
 * @returns A new list.
 */
export const reverse = as => toArray(as).reduce(flip(prepend), mempty(as))

/**
 * Returns a list that contains the elements in the list of `as` interspersed
 * with the separator `s`.
 *
 * @summary Intersperses the elements of a list with separator.
 *
 * @example
 *
 * F.intersperse(4, [1, 2, 3]) // [1, 4, 2, 4, 3]
 * F.intersperse('-', 'foo') // 'f-o-o'
 *
 * @curried
 * @function
 * @param s A separator.
 * @param as A list.
 * @returns A new list.
 */
export const intersperse = curry((s, as) => {
  const prependToAll = bs =>
    empty(bs)
      ? mempty(bs)
      : concat(s, head(bs), prependToAll(tail(bs)))

  return empty(as)
    ? mempty(as)
    : concat(head(as), prependToAll(tail(as)))
})
