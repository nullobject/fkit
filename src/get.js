import curry from './curry'

/**
 * Gets a property of an object.
 *
 * @param {String} k The key to get.
 * @param {Object} o The object.
 * @returns The property at the key `k` in the object `o`.
 * @example
 *
 * import { get } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * get('name', person) // 'Jane'
 */
export function get (k, o) {
  return o[k]
}

export default curry(get)
