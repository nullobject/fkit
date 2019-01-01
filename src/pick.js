import curry from './curry'
import get from './get'
import set from './set'

export function pick (ks, o) {
  return ks.reduce((p, k) => set(k, get(k, o), p), {})
}

/**
 * Returns a copy of the object `o` *with* the properties in the list of `ks`.
 *
 * @summary Picks properties of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.pick(['name', 'age'], person) // { name: 'Jane', age: 20 }
 *
 * @curried
 * @function
 * @param ks A list.
 * @param o An object.
 * @returns A new object.
 */
export default curry(pick)
