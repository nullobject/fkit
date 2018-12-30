import variadic from './variadic'
import { extend } from './util'

/**
 * Returns a copy of the objects in the list of `os`.
 *
 * Properties with the same key will take precedence from right to left.
 *
 * The copy will have the *same* prototype as the *first* object in the list.
 *
 * @summary Creates a copy of an object.
 *
 * @example
 *
 * var person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * F.copy(person, { name: 'Steve' }) // { name: 'Steve', age: 20, city: 'Melbourne' }
 *
 * @function
 * @param os A list.
 * @returns A new object.
 */
export default variadic((o, ps) => extend(Object.create(Object.getPrototypeOf(o)), [o].concat(ps)))
