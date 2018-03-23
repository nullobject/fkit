import {curry, flip, variadic} from './fn'
import {difference} from './list/set'
import {extend} from './util'

/**
 * This module defines operations on objects.
 *
 * @module fkit/obj
 * @summary Objects
 */

/**
 * Returns the result of the method `k` of object `o` applied to the value `a`.
 *
 * @summary Applies a method to a value.
 *
 * @example
 *
 * var person = {sayHi: a => ['Hi', a, '!'].join(' ')}
 * F.applyMethod(sayHi, 'Jane', person) // Hi Jane!
 *
 * @curried
 * @function
 * @param k A string.
 * @param a A value.
 * @param o An object.
 * @returns A value.
 */
export const applyMethod = curry((k, a, o) => o[k](a))

/**
 * Returns the result of the method `k` of object `o` applied to the values `a`
 * and `b`.
 *
 * @summary Applies a method to two values.
 *
 * @example
 *
 * var person = {sayHi: (a, b) => ['Hi', a, b, '!'].join(' ')}
 * F.applyMethod2(sayHi, 'Jane', 'Appleseed', person) // Hi Jane Appleseed!
 *
 * @curried
 * @function
 * @param k A string.
 * @param a A value.
 * @param b A value.
 * @param o An object.
 * @returns A value.
 */
export const applyMethod2 = curry((k, a, b, o) => o[k](a, b))

/**
 * Returns the result of the method `k` of object `o` applied to the values
 * `a`, `b`, and `c`.
 *
 * @summary Applies a method to three values.
 *
 * @example
 *
 * var person = {sayHi: (a, b, c) => ['Hi', a, b, c, '!'].join(' ')}
 * F.applyMethod3(sayHi, 'Ms', 'Jane', 'Appleseed', person) // Hi Ms Jane Appleseed!
 *
 * @curried
 * @function
 * @param k A string.
 * @param a A value.
 * @param b A value.
 * @param c A value.
 * @param o An object.
 * @returns A value.
 */
export const applyMethod3 = curry((k, a, b, c, o) => o[k](a, b, c))

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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.copy(person, {name: 'Steve'}) // {name: 'Steve', age: 20, city: 'Melbourne'}
 *
 * @function
 * @param os A list.
 * @returns A new object.
 */
export const copy = variadic((o, ps) => extend(Object.create(Object.getPrototypeOf(o)), [o].concat(ps)))

/**
 * Returns the property at the key `k` in the object `o`.
 *
 * @summary Gets a property of an object.
 *
 * @example
 *
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.get('name', person) // 'Jane'
 *
 * @curried
 * @function
 * @param k A string.
 * @param o An object.
 * @returns A value.
 */
export const get = curry((k, o) => o[k])

/**
 * Returns the property at the key path `ks` in the object `o`.
 *
 * @summary Gets a property of an object using a key path.
 *
 * @example
 *
 * var person = {name: 'Jane', age: 20, address: {city: 'Melbourne', country: 'Australia'}}
 * F.getIn(['address', 'city'], person) // 'Melbourne'
 *
 * @curried
 * @function
 * @param ks A list.
 * @param o An object.
 * @returns A value.
 */
export const getIn = curry((ks, o) =>
  ks.reduce((a, b) => (a !== undefined) ? a[b] : undefined, o)
)

/**
 * Returns a copy of the object `o` with the property `k` set to the value `v`.
 *
 * @summary Sets a property of an object.
 *
 * @example
 *
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.set('name', 'Steve', person) // {name: 'Steve', age: 20, city: 'Melbourne'}
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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.update('age', F.inc, person) // {name: 'Jane', age: 21, city: 'Melbourne'}
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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.pick(['name', 'age'], person) // {name: 'Jane', age: 20}
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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.omit(['name', 'age'], person) // {city: 'Melbourne'}
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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
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
 * var person = {name: 'Jane', age: 20, city: 'Melbourne'}
 * F.values(person) // ['Jane', 20, 'Melbourne']
 *
 * @param o An object.
 * @returns A new list.
 */
export function values (o) {
  return keys(o).map(flip(get)(o))
}
