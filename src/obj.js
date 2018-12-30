import copy from './copy'
import curry from './curry'
import flip from './flip'
import get from './get'
import keys from './keys'
import set from './set'
import { difference } from './list/set'

/**
 * This module defines operations on objects.
 *
 * @module fkit/obj
 * @summary Objects
 */

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
export const omit = curry((ks, o) =>
  difference(keys(o), ks).reduce((p, k) => set(k, get(k, o), p), {})
)

/**
 * Returns a list of key-value pairs for the properties of the object `o`.
 *
 * @summary Gets the key-value pairs of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.pairs(person) // [['name', 'Jane'], ['age', 20], ['city', 'Melbourne']]
 *
 * @param o An object.
 * @returns A new list.
 */
export function pairs (o) {
  return keys(o).map(k => [k, get(k, o)])
}

/**
 * Returns a list of values for the properties of the object `o`.
 *
 * @summary Gets the values of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.values(person) // ['Jane', 20, 'Melbourne']
 *
 * @param o An object.
 * @returns A new list.
 */
export function values (o) {
  return keys(o).map(flip(get)(o))
}
