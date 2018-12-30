import curry from './curry'
import isString from './internal/isString'

/**
 * Returns the property at the key path `ks` in the object `o`.
 *
 * @summary Gets a property of an object using a key path.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * F.getIn(['address', 'city'], person) // 'Melbourne'
 * F.getIn('address.city', person) // 'Melbourne'
 *
 * @curried
 * @function
 * @param ks A list or a string.
 * @param o An object.
 * @returns A value.
 */
export default curry((ks, o) => {
  ks = isString(ks) ? ks.split('.') : ks
  return ks.reduce((a, b) => (a !== undefined) ? a[b] : undefined, o)
})
