import {empty, head, isString, tail, tails} from './base'
import {always, compose, curry, equal, id} from '../fn'
import {concatMap} from './fold'
import {branch, not} from '../logic'
import {reverse} from './map'

/**
 * This module defines search operations on lists.
 *
 * @private
 * @module fkit/list/search
 */

/**
 * Returns `true` if the list of `as` contains the element `a`, `false`
 * otherwise.
 *
 * @summary Determines if a value is present in a list.
 *
 * @example
 *
 * F.elem(0, [1, 2, 3]) // false
 * F.elem(1, [1, 2, 3]) // true
 *
 * F.elem('a', 'foo') // false
 * F.elem('o', 'foo') // true
 *
 * @curried
 * @function
 * @param a A value.
 * @param as A list.
 * @returns A boolean value.
 */
export const elem = curry((a, as) => as.indexOf(a) >= 0)

/**
 * Returns the index of the first occurance of the element `a` in the list of
 * `as`.
 *
 * @summary Gets the index of the first occurance of an element in a list.
 *
 * @example
 *
 * F.elemIndex(0, [1, 2, 3]) // undefined
 * F.elemIndex(1, [1, 2, 3]) // 0
 *
 * F.elemIndex('a', 'foo') // undefined
 * F.elemIndex('o', 'foo') // 1
 *
 * @curried
 * @function
 * @param a A value.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export const elemIndex = curry((a, as) => {
  const i = as.indexOf(a)
  return (i >= 0) ? i : undefined
})

/**
 * Returns the indices of all occurances of the element `a` in the list of
 * `as`.
 *
 * @summary Gets the indices of all occurances of an element in a list.
 *
 * @example
 *
 * F.elemIndices(0, [1, 2, 3]) // []
 * F.elemIndices(1, [1, 2, 3]) // [0]
 *
 * F.elemIndices('a', 'foo') // []
 * F.elemIndices('o', 'foo') // [1, 2]
 *
 * @curried
 * @function
 * @param a A value.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export const elemIndices = curry((a, as) => findIndices(equal(a), as))

/**
 * Returns an element in the list of `as` that satisfies the predicate function
 * `p`.
 *
 * @summary Finds an element in a list that satisfies a predicate function.
 *
 * @example
 *
 * F.find(F.gt(1), []) // undefined
 * F.find(F.gt(1), [1, 2, 3]) // 2
 *
 * F.find(F.eq('o'), '') // undefined
 * F.find(F.eq('o'), 'foo') // 'o'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A value or `undefined` if no value was found.
 */
export const find = curry((p, as) => head(filter(p, as)))

/**
 * Returns the index of the first occurance of an element in the list of `as`
 * that satisfies the predicate function `p`.
 *
 * @summary Finds the index of the first occurance of an element in a list that
 * satisfies a predicate function.
 *
 * @example
 *
 * F.findIndex(F.gt(1), []) // undefined
 * F.findIndex(F.gt(1), [1, 2, 3]) // 1
 *
 * F.findIndex(F.eq('o'), '') // undefined
 * F.findIndex(F.eq('o'), 'foo') // 1
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export const findIndex = curry((p, as) => {
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { return i }
  }

  return undefined
})

/**
 * Returns the indices of the elements in the list of `as` that satisfy the
 * predicate function `p`.
 *
 * @summary Finds the indices of all occurances of the elements in a list that
 * satisfy a predicate function.
 *
 * @example
 *
 * F.findIndices(F.gt(1), []) // []
 * F.findIndices(F.gt(1), [1, 2, 3]) // [1, 2]
 *
 * F.findIndices(F.eq('o'), '') // []
 * F.findIndices(F.eq('o'), 'foo') // [1, 2]
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A number or `undefined` if no value was found.
 */
export const findIndices = curry((p, as) => {
  const s = []
  const n = as.length

  for (let i = 0; i < n; i++) {
    if (p(as[i])) { s.push(i) }
  }

  return s
})

/**
 * Returns a list that contains the elements in the list of `as` that satisfy
 * the predicate function `p`.
 *
 * @summary Filters a list using a predicate function.
 *
 * @example
 *
 * F.filter(F.gt(1), [1, 2, 3]) // [2, 3]
 * F.filter(F.eq('o'), 'foo') // 'oo'
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A new list.
 */
export const filter = curry((p, as) => {
  const f = branch(p, id, always(''))
  return isString(as) ? concatMap(f, as) : as.filter(p)
})

/**
 * Returns a list that contains the elements in the list of `as` split into a
 * pair of lists: the elements that satisfy the predicate function `p` and the
 * elements that do not satisfy the predicate function `p`.
 *
 * @summary Partitions a list using a predicate function.
 *
 * @example
 *
 * F.partition(F.gt(1), [1, 2, 3]) // [[2, 3], [1]]
 * F.partition(F.eq('o'), 'foo') // ['oo', 'f']
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A pair of lists.
 */
export const partition = curry((p, as) =>
  [
    filter(p, as),
    filter(compose(not, p), as)
  ]
)

/**
 * Returns `true` if all elements in the list of `as` satisfy the predicate
 * function `p`, `false` otherwise.
 *
 * @summary Determines if all elements in a list satisfy a predicate function.
 *
 * @example
 *
 * F.all(F.gt(1), [1, 2, 3]) // false
 * F.all(F.gt(1), [2, 3]) // true
 * F.all(F.gt(1), [3]) // true
 *
 * F.all(F.eq('o'), 'foo') // false
 * F.all(F.eq('o'), 'oo') // true
 * F.all(F.eq('o'), 'o') // true
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A boolean value.
 */
export const all = curry((p, as) => {
  return filter(p, as).length === as.length
})

/**
 * Returns `true` if any elements in the list of `as` satisfy the predicate
 * function `p`, `false` otherwise.
 *
 * @summary Determines if any elements in a list satisfy a predicate function.
 *
 * @example
 *
 * F.any(F.gt(1), [1, 2, 3]) // true
 * F.any(F.gt(1), [1, 2]) // true
 * F.any(F.gt(1), [1]) // false
 *
 * F.any(F.eq('o'), 'foo') // true
 * F.any(F.eq('o'), 'fo') // true
 * F.any(F.eq('o'), 'f') // false
 *
 * @curried
 * @function
 * @param p A predicate function.
 * @param as A list.
 * @returns A boolean value.
 */
export const any = curry((p, as) => filter(p, as).length > 0)

/**
 * Returns `true` if the list of `as` is a prefix of the list of `bs`, `false`
 * otherwise.
 *
 * @summary Determines if a list is a prefix of another list.
 *
 * @example
 *
 * F.isPrefixOf([], [1, 2, 3]) // true
 * F.isPrefixOf([1, 2], [1, 2, 3]) // true
 * F.isPrefixOf([2, 3], [1, 2, 3]) // false
 *
 * F.isPrefixOf('', 'foo') // true
 * F.isPrefixOf('fo', 'foo') // true
 * F.isPrefixOf('oo', 'foo') // false
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A boolean value.
 */
export const isPrefixOf = curry(function isPrefixOf (as, bs) {
  if (empty(as)) {
    return true
  } else if (empty(bs)) {
    return false
  } else {
    return head(as) === head(bs) && isPrefixOf(tail(as), tail(bs))
  }
})

/**
 * Returns `true` if the list of `as` is a suffix of the list of `bs`, `false`
 * otherwise.
 *
 * @summary Determines if a list is a suffix of another list.
 *
 * @example
 *
 * F.isSuffixOf([], [1, 2, 3]) // true
 * F.isSuffixOf([1, 2], [1, 2, 3]) // false
 * F.isSuffixOf([2, 3], [1, 2, 3]) // true
 *
 * F.isSuffixOf('', 'foo') // true
 * F.isSuffixOf('fo', 'foo') // false
 * F.isSuffixOf('oo', 'foo') // true
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A boolean value.
 */
export const isSuffixOf = curry((as, bs) => isPrefixOf(reverse(as), reverse(bs)))

/**
 * Returns `true` if the list of `as` is contained within the list of `bs`,
 * `false` otherwise.
 *
 * @summary Determines if a list is contained within another list.
 *
 * @example
 *
 * F.isInfixOf([], [1, 2, 3]) // true
 * F.isInfixOf([2, 3], [1, 2, 3]) // true
 * F.isInfixOf([3, 2], [1, 2, 3]) // false
 *
 * F.isInfixOf('', 'foo') // true
 * F.isInfixOf('oo', 'foo') // true
 * F.isInfixOf('of', 'foo') // false
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A boolean value.
 */
export const isInfixOf = curry((as, bs) => any(isPrefixOf(as), tails(bs)))
