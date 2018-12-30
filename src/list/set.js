import append from '../append'
import compose from '../compose'
import curry from '../curry'
import empty from '../empty'
import equal from '../equal'
import flip from '../flip'
import head from '../head'
import id from '../id'
import mempty from '../internal/mempty'
import prepend from '../prepend'
import pure from '../internal/pure'
import { tail } from './base'
import { pair } from './build'
import { concat, fold, foldRight } from './fold'
import { map } from './map'
import { any, filter } from './search'

/**
 * This module defines set operations on lists.
 *
 * @private
 * @module fkit/list/set
 */

/**
 * Returns a list with all duplicate elements removed from the list of `bs`.
 * The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @summary Removes duplicate elements from a list using a comparator function.
 *
 * @example
 *
 * F.nubBy((a, b) => a === b, [1, 2, 2, 3, 3, 3]) // [1, 2, 3]
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
 *
 * F.nub([1, 2, 2, 3, 3, 3]) // [1, 2, 3]
 * F.nub('abbccc') // 'abc'
 *
 * @param as A list.
 * @returns A new list.
 */
export const nub = nubBy(equal)

/**
 * Returns a list that contains the union of elements in the lists of `as` and
 * `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the union of two lists.
 *
 * @example
 *
 * F.unionBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * F.unionBy((a, b) => a === b, 'hello', 'world') // 'hellowrd'
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const unionBy = curry((f, as, bs) =>
  fold((cs, b) => {
    return any(a => f(a, b), as) ? cs : append(b, cs)
  }, as, bs)
)

/**
 * Returns a list that contains the union of elements in the lists of `as` and
 * `bs`.
 *
 * It is a special case of the `unionBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the union of two lists.
 *
 * @example
 *
 * F.union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
 * F.union('hello', 'world') // 'hellowrd'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const union = unionBy(equal)

/**
 * Returns a list that contains the intersection of the elments in the lists of
 * `as` and `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the intersection of two lists.
 *
 * @example
 *
 * F.intersectBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [2, 3]
 * F.intersectBy((a, b) => a === b, 'hello', 'world') // 'ol'
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const intersectBy = curry((f, as, bs) =>
  fold((cs, a) => {
    return any(b => f(a, b), bs) ? append(a, cs) : cs
  }, mempty(as), as)
)

/**
 * Returns a list that contains the intersection of the elments in the lists of
 * `as` and `bs`.
 *
 * It is a special case of the `intersectBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * Duplicates are removed from `bs`, but if `as` contains duplicates then so
 * will the result.
 *
 * @summary Calculates the intersection of two lists.
 *
 * @example
 *
 * F.intersect([1, 2, 3], [2, 3, 4]) // [2, 3]
 * F.intersect('hello', 'world') // 'ol'
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const intersect = intersectBy(equal)

/**
 * Returns a list that contains the difference of the elements in the lists of
 * `as` and `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @summary Calculates the difference of two lists.
 *
 * @example
 *
 * F.differenceBy((a, b) => a === b, [1, 2, 3], [2, 3, 4]) // [1]
 * F.differenceBy((a, b) => a === b, 'hello', 'world') // 'hel'
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export const differenceBy = curry((f, as, bs) => fold(flip(removeBy(f)), as, bs))

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
 * Returns a list with the first occurance of the element `a` removed from the
 * list of `bs`. The elements are compared using the comparator function `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If the elements
 * are both considered to equal, then the comparator function should return
 * `true`. Otherwise it should return `false`.
 *
 * @summary Removes the first occurance of an element from a list using a
 * comparator function.
 *
 * @example
 *
 * F.removeBy((a, b) => a === b, 2, [1, 2, 3]) // [1, 3]
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
 * Returns a list with the first occurance of the element `a` removed from the
 * list of `bs`.
 *
 * It is a special case of the `removeBy` function where the elements are
 * compared using the strict equality `===` operator.
 *
 * @summary Removes the first occurance of an element from a list.
 *
 * @example
 *
 * F.remove(2, [1, 2, 3]) // [1, 3]
 * F.remove('f', 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param a A value.
 * @param bs A list.
 * @returns A new list.
 */
export const remove = removeBy(equal)

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
