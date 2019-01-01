import append from '../append'
import flatten from './flatten'
import flip from '../flip'
import toArray from './toArray'

/**
 * Returns a list that contains the elements in the list of `as` concatenated
 * with the starting value `s`.
 *
 * @private
 */
export default function concatWith (s, as) {
  return toArray(flatten(as)).reduce(flip(append), s)
}
