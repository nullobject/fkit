import curry from './curry'
import toArray from './internal/toArray'

export function fold (f, s, as) {
  return toArray(as).reduce(f, s)
}

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
export default curry(fold)
