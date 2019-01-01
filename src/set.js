import copy from './copy'
import curry from './curry'

export function set (k, v, o) {
  const p = {}
  p[k] = v
  return copy(o, p)
}

/**
 * Returns a copy of the object `o` with the property `k` set to the value `v`.
 *
 * @summary Sets a property of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.set('name', 'Steve', person) // { name: 'Steve', age: 20, city: 'Melbourne' }
 *
 * @curried
 * @function
 * @param k A string.
 * @param v A value.
 * @param o An object.
 * @returns A new object.
 */
export default curry(set)
