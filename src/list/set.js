import any from '../any'
import append from '../append'
import compose from '../compose'
import concat from '../concat'
import curry from '../curry'
import differenceBy from '../differenceBy'
import empty from '../empty'
import equal from '../equal'
import filter from '../filter'
import flip from '../flip'
import fold from '../fold'
import foldRight from '../foldRight'
import head from '../head'
import id from '../id'
import map from '../map'
import mempty from '../internal/mempty'
import pair from '../pair'
import prepend from '../prepend'
import pure from '../internal/pure'
import removeBy from '../removeBy'
import tail from '../tail'

/**
 * This module defines set operations on lists.
 *
 * @private
 * @module fkit/list/set
 */

/**
 * Returns a list that contains the difference of the elements in the lists of
 * `as` and `bs`.
 *
 * It is a special case of the `differenceBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Calculates the difference of two lists.
 *
 * @example
 *
 * F.difference([1, 2, 3], [2, 3, 4]) // [1]
 * F.difference('hello', 'world') // 'hel'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const difference = differenceBy(equal)

/**
 * Returns a list that contains all the ordered pairs `[a, b]` in the lists of
 * `as` and `bs`.
 *
 * @summary Calculates the cartesian product of two lists.
 *
 * @example
 *
 * F.cartesian([1, 2], [3, 4]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * F.cartesian('ab', 'cd') // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const cartesian = curry(function cartesian (as, bs) {
  return empty(as)
    ? []
    : concat(
      map(pair(head(as)), bs),
      cartesian(tail(as), bs)
    )
})

/**
 * Returns a list that contains all the subsequences of the elements in the
 * list of `as`.
 *
 * @summary Calculates the subsequences of a list.
 *
 * @example
 *
 * F.subsequences([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 * F.subsequences('abc') // ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
 *
 * @param as A list.
 * @returns A new list.
 */
export function subsequences (as) {
  const subsequences_ = bs => {
    const b = head(bs)
    const f = (ys, r) => concat(pure(ys), pure(prepend(b, ys)), r)

    if (empty(bs)) {
      return []
    } else {
      return prepend(pure(b), foldRight(f, [], subsequences_(tail(bs))))
    }
  }

  return prepend(mempty(as), subsequences_(as))
}

/**
 * Returns a list that contains all the permutations of the elements in the
 * list of `as`.
 *
 * @summary Calculates the permutations of a list.
 *
 * @example
 *
 * F.permutations([1, 2, 3]) // [[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]]
 * F.permutations('abc') // ['abc', 'bac', 'cba', 'bca', 'cab', 'acb']
 *
 * @param as A list.
 * @returns A new list.
 */
export function permutations (as) {
  const permutations_ = (bs_, cs) => {
    const b = head(bs_)
    const bs = tail(bs_)

    return empty(bs_) ? []
      : foldRight(
        interleave,
        permutations_(bs, prepend(b, cs)),
        permutations(cs)
      )

    function interleave (ds, r) {
      return interleave_(id, ds)[1]

      function interleave_ (f, es_) {
        if (empty(es_)) {
          return [bs, r]
        } else {
          const e = head(es_)
          const es = tail(es_)
          const s = interleave_(compose(f, prepend(e)), es)

          return [
            prepend(e, s[0]),
            prepend(f(concat(b, e, s[0])), s[1])
          ]
        }
      }
    }
  }

  return prepend(as, permutations_(as, []))
}
