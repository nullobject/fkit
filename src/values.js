import flip from './flip'
import keys from './keys'
import { get } from './get'

/**
 * Gets the values of an object.
 *
 * @param {Object} o An object.
 * @returns {Array} A list of values for the properties of the object `o`.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.values(person) // ['Jane', 20, 'Melbourne']
 */
export default function values (o) {
  return keys(o).map(flip(get)(o))
}
