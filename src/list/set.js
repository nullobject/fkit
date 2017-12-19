import {append, empty, head, mempty, prepend, pure, tail} from './base'
import {pair} from './build'
import {compose, curry, equal, flip, id} from '../fn'
import {concat, fold, foldRight} from './fold'
import {map} from './map'
import {elem, filter} from './search'

/**
 * This module defines set operations on lists.
 *
 * @private
 * @module fkit/list/set
 * @author Josh Bassett
 */

/**
 * Returns a list with all duplicate elements removed from the list of `as`.
 *
 * It is a special case of the `nubBy` function where the elements are compared
 * using the strict equality `===` operator.
 *
 * The resulting list will only contain unique elements.
 *
 * @summary Removes duplicate elements from a list.
 *
 * @example
 *   F.nub([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 *   F.nub('abbccc') // 'abc'
 *
 * @param as A list.
 * @returns A new list.
 */
export function nub (as) { return nubBy(equal, as) }

/**
 * Returns a list with all duplicate elements that satisfy the comparator
 * function `f` removed from the list of `bs`.
 *
 * @summary Removes duplicate elements from a list using a comparator function.
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A new list.
 */
export const nubBy = curry(function nubBy (f, as) {
  const a = head(as)

  return empty(as)
    ? mempty(as)
    : prepend(
      a,
      nubBy(f, filter(b => !f(a, b), tail(as)))
    )
})

/**
 * Returns a list that contains the union of elements in the lists of `as` and
 * `bs`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the union of two lists.
 *
 * @example
 *   F.union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 *   F.union('hello', 'world') // 'hellowrd'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const union = curry((as, bs) =>
  fold((cs, b) =>
    (elem(b, cs)) ? cs : append(b, cs)
  , as, bs)
)

/**
 * Returns a list that contains the intersection of the elments in the lists of
 * `as` and `bs`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the intersection of two lists.
 *
 * @example
 *   F.intersect([1, 2, 3], [2, 3, 4]) // [2, 3]
 *   F.intersect('hello', 'world') // 'ol'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const intersect = curry((as, bs) =>
  fold((cs, a) =>
    (elem(a, bs)) ? append(a, cs) : cs
  , mempty(as), as)
)

/**
 * Returns a list that contains the difference of the elements in the lists of
 * `as` and `bs`.
 *
 * @summary Calculates the difference of two lists.
 *
 * @example
 *   F.difference([1, 2, 3], [2, 3, 4]) // [1]
 *   F.difference('hello', 'world') // 'wrd'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const difference = curry((as, bs) => fold(flip(remove), as, bs))

/**
 * Returns a list with the first occurance of the element `a` removed from the
 * list of `bs`.
 *
 * It is a special case of the `removeBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Removes the first occurance of an element from a list.
 *
 * @example
 *   F.remove(2, [1, 2, 3]) // [1, 3]
 *   F.remove('f', 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export const remove = curry((a, bs) => removeBy(equal, a, bs))

/**
 * Returns a list with the first occurance of the element `a` that satisfies
 * the comparator function `f` removed from the list of `bs`.
 *
 * @summary Removes the first occurance of an element from a list using a
 * comparator function.
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export const removeBy = curry(function removeBy (f, a, bs_) {
  const b = head(bs_)
  const bs = tail(bs_)

  return empty(bs_)
    ? mempty(bs_)
    : f(a, b) ? bs : prepend(b, removeBy(f, a, bs))
})

/**
 * Returns a list that contains all the ordered pairs `[a, b]` in the lists of
 * `as` and `bs`.
 *
 * @summary Calculates the cartesian product of two lists.
 *
 * @example
 *   F.cartesian([1, 2], [3, 4]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 *   F.cartesian('ab', 'cd') // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
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
 *   F.subsequences([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
 *   F.subsequences('abc') // ['', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc']
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
 *   F.permutations([1, 2, 3]) // [[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]]
 *   F.permutations('abc') // ['abc', 'bac', 'cba', 'bca', 'cab', 'acb']
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
