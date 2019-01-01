import curry from './curry'
import flip from './flip'
import toArray from './internal/toArray'

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
export default curry((f, s, as) => toArray(as).reduceRight(flip(f), s))
