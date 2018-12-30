import add from '../add'
import compare from '../compare'
import compose from '../compose'
import curry from '../curry'
import flatten from '../internal/flatten'
import flip from '../flip'
import isArray from '../internal/isArray'
import mul from '../mul'
import tap from '../tap'
import variadic from '../variadic'
import { append, isArrayOfStrings, mempty, toArray } from './base'

/**
 * This module defines fold operations on lists.
 *
 * @private
 * @module fkit/list/fold
 */

/**
 * Flattens any strings in the list of `as`.
 *
 * @private
 */
export function flattenStrings (as) {
  if (isArrayOfStrings(as)) {
    return concat(as)
  } else {
    if (isArray(as)) {
      return as.map(flattenStrings)
    } else {
      return as
    }
  }
}

/**
 * Returns a list that contains the elements in the list of `as` concatenated
 * with the starting value `s`.
 *
 * @private
 */
export function concatWith (s, as) {
  return toArray(flatten(as)).reduce(flip(append), s)
}

/**
 * Returns a list that contains the concatenated elements in the list of
 * `as`.
 *
 * @summary Concatenates lists.
 *
 * @example
 *
 * F.concat([1], [2, 3], [4, 5, 6]) // [1, 2, 3, 4, 5, 6]
 * F.concat('f', 'oo', 'bar') // 'foobar'
 *
 * @function
 * @param as A list.
 * @returns A new list.
 */
export const concat = variadic(as => concatWith(mempty(as), as))

/**
 * Returns a list that contains the elements in the list of `as` mapped with
 * the function `f` concatenated together.
 *
 * @summary Maps a function over a list and concatenates the results.
 *
 * @example
 *
 * F.concatMap(a => [a, 0], [1, 2, 3]) // [1, 0, 2, 0, 3, 0]
 *
 * F.concatMap(a => [a, '-'], 'foo') // 'f-o-o-'
 *
 * @curried
 * @function
 * @param f A function.
 * @param as A list.
 * @returns A new list.
 */
export const concatMap = curry((f, as) => {
  const bs = toArray(as).map(compose(flattenStrings, f))
  const cs = bs.length > 0 ? bs : as
  return concatWith(mempty(cs), bs)
})

/**
 * Returns a list that contains the elements in the list of `as` folded
 * left-to-right with the binary function `f` and starting value `s`.
 *
 * @summary Folds a list from left to right with a function.
 *
 * @example
 *
 * F.fold(F.flip(F.prepend), [], [1, 2, 3]) // [3, 2, 1]
 * F.fold(F.flip(F.prepend), '', 'foo') // 'oof'
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A value.
 */
export const fold = curry((f, s, as) => toArray(as).reduce(f, s))

/**
 * Returns a list that contains the elements in the list of `as` folded
 * right-to-left with the binary function `f` and starting value `s`.
 *
 * @summary Folds a list from right to left with a function.
 *
 * @example
 *
 * F.foldRight(F.append, [], [1, 2, 3]) // [3, 2, 1]
 * F.foldRight(F.append, '', 'foo') // 'oof'
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A value.
 */
export const foldRight = curry((f, s, as) => toArray(as).reduceRight(flip(f), s))

/**
 * Returns a list that contains the elements in the list of `as` scanned
 * left-to-right with the binary function `f` and starting value `s`.
 *
 * @summary Scans a list from left to right with a function.
 *
 * @example
 *
 * F.scan(F.flip(F.prepend), [],  [1, 2, 3]) // [[], [1], [2, 1], [3, 2, 1]]
 * F.scan(F.flip(F.prepend), '',  'foo') // ['', 'f', 'of', 'oof']
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A new list.
 */
export const scan = curry((f, s, as) => {
  const r = [s]
  fold((b, a) => tap(r.push.bind(r), f(b, a)), s, as)
  return r
})

/**
 * Returns a list that contains the elements in the list of `as` scanned
 * right-to-left with the binary function `f` and starting value `s`.
 *
 * @summary Scans a list from right to left with a function.
 *
 * @example
 *
 * F.scanRight(F.append, [],  [1, 2, 3]) // [[3, 2, 1], [3, 2], [3], []]
 * F.scanRight(F.append, '',  'foo') // ['oof', 'oo', 'o', '']
 *
 * @curried
 * @function
 * @param f A binary function.
 * @param s A starting value.
 * @param as A list.
 * @returns A new list.
 */
export const scanRight = curry((f, s, as) => {
  const r = [s]
  foldRight((a, b) => tap(r.unshift.bind(r), f(a, b)), s, as)
  return r
})

/**
 * Returns the maximum value in the list of `as` using the comparator function
 * `f`.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal then, the comparator function should return `0`.
 *
 * @summary Calculates the maximum value of a list using a comparator function.
 *
 * @example
 *
 * F.maximumBy(F.compare, [1, 2, 3]) // 3
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A value.
 */
export const maximumBy = curry((f, as) =>
  fold((a, b) => f(a, b) > 0 ? a : b, as[0], as)
)

/**
 * Returns the maximum value in the list of `as`.
 *
 * @summary Calculates the maximum value of a list.
 *
 * @example
 *
 * F.maximum([1, 2, 3]) // 3
 * F.maximum('abc') // 'c'
 *
 * @param as A list.
 * @returns A value.
 */
export const maximum = maximumBy(compare)

/**
 * Returns the minimum value in the list of `as` using the comparator function
 * `f`.
 *
 * @summary Calculates the minimum value of a list using a comparator
 * function.
 *
 * The comparator function compares two elements, `a` and `b`. If `a` is
 * greater than `b`, then the comparator function should return `1`. If `a` is
 * less than `b`, then the comparator function should return `-1`. If both
 * elements are equal, then the comparator function should return `0`.
 *
 * @example
 *
 * F.minimumBy(F.compare, [1, 2, 3]) // 1
 *
 * @curried
 * @function
 * @param f A comparator function.
 * @param as A list.
 * @returns A value.
 */
export const minimumBy = curry((f, as) =>
  fold((a, b) => f(a, b) < 0 ? a : b, as[0], as)
)

/**
 * Returns the minimum value in the list of `as`.
 *
 * @summary Calculates the minimum value of a list.
 *
 * @example
 *
 * F.minimum([1, 2, 3]) // 1
 * F.minimum('abc') // 'a'
 *
 * @param as A list.
 * @returns A value.
 */
export const minimum = minimumBy(compare)

/**
 * Returns the sum of the elements in the list of `as`.
 *
 * @summary Calculates the sum of the elements in a list.
 *
 * @example
 *
 * F.sum([1, 2, 3]) // 6
 *
 * @param as A list.
 * @returns A number.
 */
export function sum (as) { return fold(add, 0, as) }

/**
 * Returns the product of the elements in the list of `as`.
 *
 * @summary Calculates the product of the elements in a list.
 *
 * @example
 *
 * F.product([1, 2, 3]) // 6
 *
 * @param as A list.
 * @returns A number.
 */
export function product (as) { return fold(mul, 1, as) }
