import concat from './concat'
import curry from './curry'
import empty from './empty'
import head from './head'
import map from './map'
import pair from './pair'
import tail from './tail'

/**
 * Returns a list that contains all the ordered pairs `[a, b]` in the lists of
 * `as` and `bs`.
 *
 * @summary Calculates the cartesian product of two lists.
 *
 * @example
 *
 * F.cartesian([1, 2], [3, 4]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * F.cartesian('ab', 'cd') // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
 *
 * @curried
 * @function
 * @param as A list.
 * @param bs A list.
 * @returns A new list.
 */
export default curry(function cartesian (as, bs) {
  return empty(as)
    ? []
    : concat(
      map(pair(head(as)), bs),
      cartesian(tail(as), bs)
    )
})
