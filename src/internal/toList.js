/**
 * Converts the list of `as` to a list of type `t`.
 *
 * @private
 */
export default function toList (as, t) {
  return t === 'string' ? as.join('') : as
}
