/**
 * Flattens the list of `as`.
 *
 * @private
 */
export default function flatten (as) {
  return as.reduce((a, b) => a.concat(b), [])
}
