import curry from './curry'
import { get } from './get'
import { set } from './set'

/**
 * Picks properties of an object.
 *
 * @param {Array} ks A list.
 * @param {Object} o An object.
 * @returns {Object} A copy of the object `o` *with* the properties in the list
 * of `ks`.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.pick(['name', 'age'], person) // { name: 'Jane', age: 20 }
 */
export function pick (ks, o) {
  return ks.reduce((p, k) => set(k, get(k, o), p), {})
}

export default curry(pick)
