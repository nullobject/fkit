'use strict';

var fn   = require('./fn'),
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
  copy: fn.variadic(function(target, objects) {
    return util.extend(new target.constructor(), [target].concat(objects));
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
  get: fn.curry(function(property, target) {
    return target[property];
  }),

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
  set: fn.curry(function(property, value, target) {
    var object = {};
    object[property] = value;
    return self.copy(target, object);
  }),

  /**
   * Returns an object that contains only the properties of the object `o` from
   * the list of `ks`.
   *
   * @summary Gets properties of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   pick(person, 'name', 'age'); // {name: 'jane', age: '20'}
   *
   * @function
   * @param o An object.
   * @param ks A list.
   * @returns A new object.
   */
  pick: fn.variadic(function(target, properties) {
    return properties.reduce(function(b, a) {
      return self.set(a, self.get(a, target), b);
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
  pairs: function(target) {
    return Object.keys(target).map(function(key) {
      return [key, target[key]];
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
    return Object.keys(o).map(function(k) {
      return o[k];
    });
  },
};
