import variadic from './variadic'

function extend (target, objects) {
  objects.forEach(object => {
    Object.getOwnPropertyNames(object).forEach(property => {
      target[property] = object[property]
    })
  })
  return target
}

/**
 * Creates a copy of one or more objects.
 *
 * Properties with the same key will take precedence from right to left. The
 * copy will have the *same* prototype as the *first* object in the list.
 *
 * @function
 * @param {Array} os A list of objects.
 * @returns {Object} A copy of the objects in the list of `os`.
 * @example
 *
 * import { copy } from 'fkit'
 * const person = { name: 'Jane', age: 20, city: 'Melbourne' }
 * copy(person, { name: 'Steve' }) // { name: 'Steve', age: 20, city: 'Melbourne' }
 */
export default variadic((o, ps) => extend(Object.create(Object.getPrototypeOf(o)), [o].concat(ps)))
