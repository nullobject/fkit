import curry from './curry'
import update from './uncurried/update'

/**
 * Updates a property of an object with a function.
 *
 * @function
 * @param {Array|String} ks The key path.
 * @param {Function} f The function.
 * @param {Object} o The object.
 * @returns {Object} A copy of the object `o` with the property at the key
 * path `ks` updated with the function `f`.
 * @example
 *
 * import { always, inc, update } from 'fkit'
 * const person = { name: 'Jane', age: 20, address: { city: 'Melbourne', country: 'Australia' } }
 * update('age', inc, person) // { name: 'Jane', age: 21, address: { city: 'Melbourne', country: 'Australia' } }
 * update('address.city', always('Sydney'), person) // { name: 'Jane', age: 20, address: { city: 'Sydney', country: 'Australia' } }
 */
export default curry(update)
