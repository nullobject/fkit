import isArrayOfStrings from './isArrayOfStrings'
import isString from './isString'

/**
 * Returns an empty monoid of `as`.
 *
 * @private
 */
export default function mempty (as) {
  return isString(as) || isArrayOfStrings(as) ? '' : []
}
