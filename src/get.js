import curry from './curry'
import get from './uncurried/get'

/**
 * Gets a property of an object.
 *
 * @function
 * @param {String} k The key to get.
 * @param {Object} o The object.
 * @returns The property at the key `k` in the object `o`.
 * @example
 *
 * import { get } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * get('name', person) // 'Jane'
 */
export default curry(get)
