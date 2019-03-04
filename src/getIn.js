import curry from './curry'
import getIn from './uncurried/getIn'

/**
 * Gets a property of an object using a key path.
 *
 * @function
 * @param {Array|String} ks The key path.
 * @param {Object} o The object.
 * @returns The property at the key path `ks` in the object `o`.
 * @example
 *
 * import { getIn } from 'fkit'
 * const person = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * getIn(['address', 'city'], person) // 'Melbourne'
 * getIn('address.city', person) // 'Melbourne'
 */
export default curry(getIn)
