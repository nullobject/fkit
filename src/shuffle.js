import array from './array'
import concatWith from './internal/concatWith'
import fold from './fold'
import isString from './internal/isString'
import randomInt from './randomInt'

/**
 * Returns a list that contains the elements in the list of `as` randomly
 * shuffled using the [Fisher-Yates
 * algorithm](http://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @summary Shuffles a list.
 *
 * @example
 *
 * F.shuffle([1, 2, 3]) // [2, 3, 1]
 * F.shuffle('abc') // 'bca'
 *
 * @param as A list.
 * @returns A new list.
 */
export default function shuffle (as) {
  let i = -1

  const f = (b, a) => {
    const j = randomInt(0, ++i)

    b[i] = b[j]
    b[j] = a

    return b
  }

  const r = array(as.length)
  const bs = fold(f, r, as)
  const s = isString(as) ? '' : []

  return concatWith(s, bs)
}
