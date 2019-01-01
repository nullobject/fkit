import curry from './curry'
import flip from './flip'
import toArray from './internal/toArray'

/**
 * Folds a list from right-to-left with a function.
 *
 * @param {Function} f A binary function.
 * @param s A starting value.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` folded right-to-left with the binary function `f` and starting value
 * `s`.
 *
 * @example
 *
 * F.foldRight(F.append, [], [1, 2, 3]) // [3, 2, 1]
 * F.foldRight(F.append, '', 'foo') // 'oof'
 */
export function foldRight (f, s, as) {
  return toArray(as).reduceRight(flip(f), s)
}

export default curry(foldRight)
