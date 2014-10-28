'use strict';

var fn   = require('./fn'),
    set  = require('./list/set'),
    util = require('./util');

var self;

/**
 * This module defines operations on objects.
 *
 * @module fkit/obj
 * @summary Objects
 * @author Josh Bassett
 */
self = module.exports = {
  /**
   * Returns the result of the method `k` of object `o` applied to the value
   * `a`.
   *
   * @summary Applies a method to a method.
   *
   * @example
   *   var person = {sayHi: function(a) { return ['Hi', a, '!'].join(' '); }};
   *   F.applyMethod(sayHi, 'Jane', person); // Hi Jane!
   *
   * @curried
   * @function
   * @param k A string.
   * @param a A value.
   * @param o An object.
   * @returns A value.
   */
  applyMethod: fn.curry(function(k, a, o) {
    return o[k](a);
  }),

  /**
   * Returns the result of the method `k` of object `o` applied to the values
   * `a` and `b`.
   *
   * @summary Applies a method to two values.
   *
   * @example
   *   var person = {sayHi: function(a, b) { return ['Hi', a, b, '!'].join(' '); }};
   *   F.applyMethod2(sayHi, 'Jane', 'Appleseed', person); // Hi Jane Appleseed!
   *
   * @curried
   * @function
   * @param k A string.
   * @param a A value.
   * @param b A value.
   * @param o An object.
   * @returns A value.
   */
  applyMethod2: fn.curry(function(k, a, b, o) {
    return o[k](a, b);
  }),

  /**
   * Returns the result of the method `k` of object `o` applied to the values
   * `a`, `b`, and `c`.
   *
   * @summary Applies a method to three values.
   *
   * @example
   *   var person = {sayHi: function(a, b, c) { return ['Hi', a, b, c, '!'].join(' '); }};
   *   F.applyMethod3(sayHi, 'Ms', 'Jane', 'Appleseed', person); // Hi Ms Jane Appleseed!
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
  applyMethod3: fn.curry(function(k, a, b, c, o) {
    return o[k](a, b, c);
  }),

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
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.copy(person, {name: 'Steve'}); // {name: 'Steve', age: 20, city: 'Melbourne'}
   *
   * @function
   * @param os A list.
   * @returns A new object.
   */
  copy: fn.variadic(function(o, ps) {
    return util.extend(new o.constructor(), [o].concat(ps));
  }),

  /**
   * Returns the property at the key `k` in the object `o`.
   *
   * @summary Gets a property of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.get('name', person); // 'Jane'
   *
   * @curried
   * @function
   * @param k A string.
   * @param o An object.
   * @returns A value.
   */
  get: fn.curry(function(k, o) { return o[k]; }),

  /**
   * Returns the property at the key path `ks` in the object `o`.
   *
   * @summary Gets a property of an object using a key path.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, address: {city: 'Melbourne', country: 'Australia'}};
   *   F.getIn(['address', 'city'], person); // 'Melbourne'
   *
   * @curried
   * @function
   * @param ks A list.
   * @param o An object.
   * @returns A value.
   */
  getIn: fn.curry(function(ks, o) {
    return ks.reduce(function(a, b) {
      return (a !== undefined) ? a[b] : undefined;
    }, o);
  }),

  /**
   * Returns a copy of the object `o` with the property `k` set to the value
   * `v`.
   *
   * @summary Sets a property of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.set('name', 'Steve', person); // {name: 'Steve', age: 20, city: 'Melbourne'}
   *
   * @curried
   * @function
   * @param k A string.
   * @param v A value.
   * @param o An object.
   * @returns A new object.
   */
  set: fn.curry(function(k, v, o) {
    var p = {};
    p[k] = v;
    return self.copy(o, p);
  }),

  /**
   * Returns a copy of the object `o` with the property `k` updated with the
   * function `f`.
   *
   * @summary Updates a property of an object with a function.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.update('age', F.inc, person); // {name: 'Jane', age: 21, city: 'Melbourne'}
   *
   * @curried
   * @function
   * @param k A string.
   * @param f A function.
   * @param o An object.
   * @returns A new object.
   */
  update: fn.curry(function(k, f, o) {
    return self.set(k, f(self.get(k, o)), o);
  }),

  /**
   * Returns a copy of the object `o` *with* the properties in the list of
   * `ks`.
   *
   * @summary Picks properties of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.pick(['name', 'age'], person); // {name: 'Jane', age: 20}
   *
   * @curried
   * @function
   * @param ks A list.
   * @param o An object.
   * @returns A new object.
   */
  pick: fn.curry(function(ks, o) {
    return ks.reduce(function(p, k) {
      return self.set(k, self.get(k, o), p);
    }, {});
  }),

  /**
   * Returns a copy of the object `o` *without* the properties in the list of
   * `ks`.
   *
   * @summary Omits properties of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.omit(['name', 'age'], person); // {city: 'Melbourne'}
   *
   * @curried
   * @function
   * @param ks A list.
   * @param o An object.
   * @returns A new object.
   */
  omit: fn.curry(function(ks, o) {
    return set
      .difference(self.keys(o), ks)
      .reduce(function(p, k) {
        return self.set(k, self.get(k, o), p);
      }, {});
  }),

  /**
   * Returns a list of key-value pairs for the properties of the object `o`.
   *
   * @summary Gets the key-value pairs of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.pairs(person); // [['name', 'Jane'], ['age', 20], ['city', 'Melbourne']]
   *
   * @param o An object.
   * @returns A new list.
   */
  pairs: function(o) {
    return Object.keys(o).map(function(k) {
      return [k, self.get(k, o)];
    });
  },

  /**
   * Returns a list of keys for the properties of the object `o`.
   *
   * @summary Gets the keys of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.keys(person); // ['name', 'age', 'city']
   *
   * @param o An object.
   * @returns A new list.
   */
  keys: function(o) {
    return Object.keys(o);
  },

  /**
   * Returns a list of values for the properties of the object `o`.
   *
   * @summary Gets the values of an object.
   *
   * @example
   *   var person = {name: 'Jane', age: 20, city: 'Melbourne'};
   *   F.values(person); // ['Jane', 20, 'Melbourne']
   *
   * @param o An object.
   * @returns A new list.
   */
  values: function(o) {
    return Object
      .keys(o)
      .map(fn.flip(self.get)(o));
  },
};
