import isArrayOfStrings from './isArrayOfStrings'
import isString from './isString'

/**
 * Returns `a` in a pure context.
 *
 * @private
 */
export default function pure (a) {
  return isString(a) || isArrayOfStrings(a) ? a : [a]
}
