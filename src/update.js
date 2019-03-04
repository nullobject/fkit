import curry from './curry'
import update from './uncurried/update'

/**
 * Updates a property of an object with a function.
 *
 * @function
 * @param {String} k The name of the property.
 * @param {Function} f The function.
 * @param {Object} o The object.
 * @returns {Object} A copy of the object `o` with the property `k` updated
 * with the function `f`.
 * @example
 *
 * import { inc, update } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * update('age', inc, person) // { name: 'Jane', age: 21, city: 'Melbourne' }
 */
export default curry(update)
