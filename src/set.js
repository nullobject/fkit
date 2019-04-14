import curry from './curry'
import set from './uncurried/set'

/**
 * Sets a property of an object using a key path.
 *
 * @function
 * @param {Array|String} ks The key path.
 * @param v The value to set.
 * @param {Object} o The object.
 * @returns {Object} A copy of the object `o` with the property at the key
 * path `ks` set to the value `v`.
 * @example
 *
 * import { set } from 'fkit'
 * const person = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * set('name', 'Steve', person) // { name: 'Steve', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * set('address.city', 'Sydney', person) // { name: 'Jane', age: 20, address: { city: 'Sydney', country: 'Australia' } }
 */
export default curry(set)
