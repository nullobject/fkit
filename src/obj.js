import copy from './copy'
import curry from './curry'
import flip from './flip'
import get from './get'
import keys from './keys'
import set from './set'

/**
 * This module defines operations on objects.
 *
 * @module fkit/obj
 * @summary Objects
 */

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
