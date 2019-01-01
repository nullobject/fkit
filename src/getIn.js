import curry from './curry'
import isString from './internal/isString'

/**
 * Gets a property of an object using a key path.
 *
 * @param {Array|String} ks A list or a string.
 * @param {Object} o An object.
 * @returns The property at the key path `ks` in the object `o`.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * F.getIn(['address', 'city'], person) // 'Melbourne'
 * F.getIn('address.city', person) // 'Melbourne'
 */
export function getIn (ks, o) {
  ks = isString(ks) ? ks.split('.') : ks
  return ks.reduce((a, b) => (a !== undefined) ? a[b] : undefined, o)
}

export default curry(getIn)
