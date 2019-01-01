import curry from './curry'
import toArray from './internal/toArray'

/**
 * Folds a list from left-to-right with a function.
 *
 * @param {Function} f A binary function.
 * @param s A starting value.
 * @param {Array|String} as A list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` folded left-to-right with the binary function `f` and starting value
 * `s`.
 *
 * @example
 *
 * F.fold(F.flip(F.prepend), [], [1, 2, 3]) // [3, 2, 1]
 * F.fold(F.flip(F.prepend), '', 'foo') // 'oof'
 */
export function fold (f, s, as) {
  return toArray(as).reduce(f, s)
}

export default curry(fold)
