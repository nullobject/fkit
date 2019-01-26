import get from './get'
import keys from './keys'

/**
 * Gets the key-value pairs of an object.
 *
 * @param {Object} o An object.
 * @returns {Array} A list of key-value pairs for the properties of the object
 * `o`.
 * @example
 *
 * import { pairs } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * pairs(person) // [['name', 'Jane'], ['age', 20], ['city', 'Melbourne']]
 */
export default function pairs (o) {
  return keys(o).map(k => [k, get(k, o)])
}
