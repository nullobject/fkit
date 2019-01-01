import curry from './curry'
import toArray from './internal/toArray'

export function map (f, as) {
  return toArray(as).map(f)
}

/**
 * Returns a list that contains the elements in the list of `as` mapped with
 * the function `f`.
 *
 * @summary Maps a function over a list.
 *
 * @example
 *
 * F.map(F.inc, [1, 2, 3]) // [2, 3, 4]
 * F.map(F.toUpper, 'foo') // ['F', 'O', 'O']
 *
 * @curried
 * @function
 * @param f A function.
 * @param as A list.
 * @returns A new list.
 */
export default curry(map)
