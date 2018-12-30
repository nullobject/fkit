import copy from './copy'
import curry from './curry'
import flip from './flip'
import get from './get'
import { difference } from './list/set'

/**
 * This module defines operations on objects.
 *
 * @module fkit/obj
 * @summary Objects
 */

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
export const set = curry((k, v, o) => {
  const p = {}
  p[k] = v
  return copy(o, p)
})

/**
 * Returns a copy of the object `o` with the property `k` updated with the
 * function `f`.
 *
 * @summary Updates a property of an object with a function.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.update('age', F.inc, person) // { name: 'Jane', age: 21, city: 'Melbourne' }
 *
 * @curried
 * @function
 * @param k A string.
 * @param f A function.
 * @param o An object.
 * @returns A new object.
 */
export const update = curry((k, f, o) => set(k, f(get(k, o)), o))

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
export const pick = curry((ks, o) =>
  ks.reduce((p, k) => set(k, get(k, o), p), {})
)

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
 * Returns a list of keys for the properties of the object `o`.
 *
 * @summary Gets the keys of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.keys(person) // ['name', 'age', 'city']
 *
 * @param o An object.
 * @returns A new list.
 */
export function keys (o) {
  return Object.keys(o)
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
