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
   * All the properties of the `target` object will be copied to the new
   * object (using the *same* prototype).
   *
   * A list of `objects` may also be specified to override the properties of
   * the `target` object.
   *
   * @summary Creates a copy of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   copy(person, {name: 'bob'}); // {name: 'bob', age: '20', city: 'Melbourne'}
   *
   * @function
   * @param target A target object.
   * @param objects A list of objects to be copied.
   * @returns A new object.
   */
  copy: fn.variadic(function(target, objects) {
    return util.extend(new target.constructor(), [target].concat(objects));
  }),

  /**
   * @summary Gets a property of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   get('name', person); // 'jane'
   *
   * @curried
   * @function
   * @param property A string representing the property name.
   * @param target A target object.
   * @returns A property value.
   */
  get: fn.curry(function(property, target) {
    return target[property];
  }),

  /**
   * Creates a copy of the `target` object with the `property` set to
   * the `value`.
   *
   * @summary Sets a property of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   set('name', 'bob', person); // {name: 'bob', age: '20', city: 'Melbourne'}
   *
   * @curried
   * @function
   * @param property A string representing the property name.
   * @param value A property value.
   * @param target A target object.
   * @returns A new object.
   */
  set: fn.curry(function(property, value, target) {
    var object = {};
    object[property] = value;
    return self.copy(target, object);
  }),

  /**
   * @summary Gets many properties of an object.
   *
   * @example
   *   var person = {name: 'jane', age: 20, city: 'Melbourne'};
   *   pick(person, name, age); // {name: 'jane', age: '20'}
   *
   * @function
   * @param target A target object.
   * @param properties A list of properties.
   * @returns A new object.
   */
  pick: fn.variadic(function(target, properties) {
    return properties.reduce(function(b, a) {
      return self.set(a, self.get(a, target), b);
    }, {});
  }),
};
