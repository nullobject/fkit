import curry from './curry'
import omit from './uncurried/omit'

/**
 * Omits properties of an object.
 *
 * @function
 * @param {Array} ks The list of keys to omit.
 * @param {Object} o The object.
 * @returns {Object} A copy of the object `o` *without* the properties in the
 * list of `ks`.
 * @example
 *
 * import { omit } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * omit(['name', 'age'], person) // { city: 'Melbourne' }
 */
export default curry(omit)
