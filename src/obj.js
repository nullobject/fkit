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
   * Returns a copy of the objects in the list of `os`.
   *
   * Properties with the same key will take precedence from right to left.
   *
   * The copy will have the *same* prototype as the *first* object in the list.
   *
   * @summary Creates a copy of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   copy(person, {name: 'bob'}); // {name: 'bob', age: '20', city: 'Melbourne'}
   *
   * @function
   * @param os A list.
   * @returns A new object.
   */
  copy: fn.variadic(function(o, ps) {
    return util.extend(new o.constructor(), [o].concat(ps));
  }),

  /**
   * Returns the property `k` of the object `o`.
   *
   * @summary Gets a property of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   get('name', person); // 'jane'
   *
   * @curried
   * @function
   * @param k A string.
   * @param o An object.
   * @returns A value.
   */
  get: fn.curry(function(k, o) { return o[k]; }),

  /**
   * Returns a copy of the object `o` with the property `k` set to the value
   * `v`.
   *
   * @summary Sets a property of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   set('name', 'bob', person); // {name: 'bob', age: '20', city: 'Melbourne'}
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
   * Returns a copy of the object `o` *with* the properties in the list of
   * `ks`.
   *
   * @summary Picks properties of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   pick(['name', 'age'], person); // {name: 'jane', age: '20'}
   *
   * @curried
   * @function
   * @param o An object.
   * @param ks A list.
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
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   omit(['name', 'age'], person); // {city: 'Melbourne'}
   *
   * @curried
   * @function
   * @param o An object.
   * @param ks A list.
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
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   pairs(person); // [['name', 'jane'], ['age', '20'], ['city', 'Melbourne']]
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
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   keys(person); // ['name', 'age', 'city']
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
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   values(person); // ['jane', '20', 'Melbourne']
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
