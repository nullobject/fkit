import flip from './flip'
import mempty from './internal/mempty'
import prepend from './prepend'
import toArray from './internal/toArray'

/**
 * Returns a list that contains the elements in the list of `as` in reverse
 * order.
 *
 * @summary Reverses the elements in a list.
 *
 * @example
 *
 * F.reverse([1, 2, 3]) // [3, 2, 1]
 * F.reverse('foo') // 'oof'
 *
 * @param as A list.
 * @returns A new list.
 */
export default as => toArray(as).reduce(flip(prepend), mempty(as))
