import curry from './curry'
import has from './uncurried/has'

/**
 * Determines whether an object has a property at a key path.
 *
 * @function
 * @param {Array|String} ks The key path.
 * @param {Object} o The object.
 * @returns {Boolean} `true` if the object `o` has a property at the key path
 * `ks`, `false` otherwise.
 * @example
 *
 * import { has } from 'fkit'
 * const person = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * has('name', person) // true
 * has('address.city', person) // true
 */
export default curry(has)
