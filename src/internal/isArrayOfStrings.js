import isArray from './isArray'
import isString from './isString'

/**
 * Returns true if the list of `as` is an array of strings, false otherwise.
 *
 * @private
 */
export default function isArrayOfStrings (as) {
  return isArray(as) && as.length > 0 && as.reduce((a, b) => a && isString(b), true)
}
