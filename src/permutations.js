import compose from './compose'
import concat from './concat'
import empty from './empty'
import head from './head'
import id from './id'
import prepend from './prepend'
import tail from './tail'
import { foldRight } from './foldRight'

/**
 * Calculates the permutations of a list.
 *
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains all the permutations of the
 * elements in the list of `as`.
 * @example
 *
 * import { permutations } from 'fkit'
 * permutations([1, 2, 3]) // [[1, 2, 3], [2, 1, 3], [3, 2, 1], [2, 3, 1], [3, 1, 2], [1, 3, 2]]
 * permutations('abc') // ['abc', 'bac', 'cba', 'bca', 'cab', 'acb']
 */
export default function permutations (as) {
  const permutations_ = (bs_, cs) => {
    const b = head(bs_)
    const bs = tail(bs_)

    return empty(bs_) ? []
      : foldRight(
        interleave,
        permutations_(bs, prepend(b, cs)),
        permutations(cs)
      )

    function interleave (ds, r) {
      return interleave_(id, ds)[1]

      function interleave_ (f, es_) {
        if (empty(es_)) {
          return [bs, r]
        } else {
          const e = head(es_)
          const es = tail(es_)
          const s = interleave_(compose(f, prepend(e)), es)

          return [
            prepend(e, s[0]),
            prepend(f(concat(b, e, s[0])), s[1])
          ]
        }
      }
    }
  }

  return prepend(as, permutations_(as, []))
}
