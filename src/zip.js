import curry from './curry'
import pair from './pair'
import zipWith from './zipWith'

export function zip (as, bs) {
  return zipWith(pair, as, bs)
}

/**
 * Returns the lists of `as` and `bs` zipped into a list of pairs.
 *
 * It is a special case of the `zipWith` function where the elements are
 * combined using the `F.pair` function.
 *
 * @summary Zips two lists into list of pairs.
 *
 * @example
 *
 * F.zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
 * F.zip('foo', 'bar') // [['f', 'b'], ['o', 'a'], ['o', 'r']]
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(zip)
