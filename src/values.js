import flip from './flip'
import keys from './keys'
import { get } from './get'

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
export default function values (o) {
  return keys(o).map(flip(get)(o))
}
