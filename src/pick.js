import curry from './curry'
import pick from './uncurried/pick'

/**
 * Picks properties of an object.
 *
 * @function
 * @param {Array} ks The list of keys.
 * @param {Object} o The object.
 * @returns {Object} A copy of the object `o` *with* the properties in the list
 * of `ks`.
 * @example
 *
 * import { pick } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * pick(['name', 'age'], person) // { name: 'Jane', age: 20 }
 */
export default curry(pick)
