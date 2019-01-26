import copy from './copy'
import curry from './curry'

/**
 * Sets a property of an object.
 *
 * @param {String} k A key.
 * @param v A value.
 * @param {Object} o An object.
 * @returns {Object} A copy of the object `o` with the property `k` set to the
 * value `v`.
 * @example
 *
 * import { set } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * set('name', 'Steve', person) // { name: 'Steve', age: 20, city: 'Melbourne' }
 */
export function set (k, v, o) {
  const p = {}
  p[k] = v
  return copy(o, p)
}

export default curry(set)
