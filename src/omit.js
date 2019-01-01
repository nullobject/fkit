import curry from './curry'
import difference from './difference'
import get from './get'
import keys from './keys'
import set from './set'

export function omit (ks, o) {
  return difference(keys(o), ks).reduce((p, k) => set(k, get(k, o), p), {})
}

/**
 * Returns a copy of the object `o` *without* the properties in the list of
 * `ks`.
 *
 * @summary Omits properties of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.omit(['name', 'age'], person) // { city: 'Melbourne' }
 *
 * @curried
 * @function
 * @param ks A list.
 * @param o An object.
 * @returns A new object.
 */
export default curry(omit)
