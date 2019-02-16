import concat from '../concat'
import isArray from './isArray'
import isArrayOfStrings from './isArrayOfStrings'

/**
 * Flattens any strings in the list of `as`.
 *
 * @private
 */
export default function flattenStrings (as) {
  if (isArrayOfStrings(as)) {
    return concat(as)
  } else if (isArray(as)) {
    return as.map(flattenStrings)
  } else {
    return as
  }
}
