import concatWith from './internal/concatWith'
import mempty from './internal/mempty'
import variadic from './variadic'

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
export default variadic(as => concatWith(mempty(as), as))
