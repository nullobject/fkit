import curry from './curry'
import set from './uncurried/set'

/**
 * Sets a property of an object.
 *
 * @function
 * @param {String} k The key.
 * @param v The value to set.
 * @param {Object} o The object.
 * @returns {Object} A copy of the object `o` with the property `k` set to the
 * value `v`.
 * @example
 *
 * import { set } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * set('name', 'Steve', person) // { name: 'Steve', age: 20, city: 'Melbourne' }
 */
export default curry(set)
