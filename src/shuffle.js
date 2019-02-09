import array from './array'
import concatWith from './internal/concatWith'
import isString from './internal/isString'
import randomInt from './randomInt'
import { fold } from './fold'

/**
 * Shuffles a list using the [Fisher-Yates
 * algorithm](http://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @param {Array|String} as The list.
 * @returns {Array|String} A list that contains the elements in the list of
 * `as` randomly shuffled.
 * @example
 *
 * import { shuffle } from 'fkit'
 * shuffle([1, 2, 3]) // [2, 3, 1]
 * shuffle('abc') // 'bca'
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
