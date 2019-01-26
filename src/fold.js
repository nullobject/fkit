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
 * @example
 *
 * import { fold } from 'fkit'
 * fold((a, b) => a.concat(b), [], [1, 2, 3]) // [1, 2, 3]
 * fold((a, b) => a.concat(b), '', 'foo') // 'foo'
 */
export function fold (f, s, as) {
  return toArray(as).reduce(f, s)
}

export default curry(fold)
