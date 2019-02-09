import curry from './curry'
import difference from './difference'
import keys from './keys'
import { get } from './get'
import { set } from './set'

/**
 * Omits properties of an object.
 *
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
export function omit (ks, o) {
  return difference(keys(o), ks).reduce((p, k) => set(k, get(k, o), p), {})
}

export default curry(omit)
