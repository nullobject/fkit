import concat from './concat'
import curry from './curry'
import empty from './empty'
import head from './head'
import pair from './pair'
import tail from './tail'
import { map } from './map'

/**
 * Calculates the cartesian product of two lists.
 *
 * @param {Array|String} as A list.
 * @param {Array|String} bs A list.
 * @returns {Array} Returns a list that contains all the ordered pairs `[a, b]`
 * in the lists of `as` and `bs`.
 * @example
 *
 * import { cartesian } from 'fkit'
 * cartesian([1, 2], [3, 4]) // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * cartesian('ab', 'cd') // [['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]
 */
export function cartesian (as, bs) {
  return empty(as)
    ? []
    : concat(
      map(pair(head(as)), bs),
      cartesian(tail(as), bs)
    )
}

export default curry(cartesian)
