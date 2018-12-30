import isString from './isString'

/**
 * Converts the list of `as` to an array.
 *
 * @private
 */
export default function toArray (as) {
  return isString(as) ? as.split('') : as
}
