'use strict';

var fn   = require('./fn'),
    util = require('./util');

var self;

/**
 * This module defines operations on objects.
 *
 * @module
 * @author Josh Bassett
 */
module.exports = self = {
  /**
   * Creates a copy of the `target` object (using the *same* prototype). All
   * the properties of the `target` object will be copied to the new object.
   *
   * A list of `objects` may also be specified to override the properties of
   * the `target` object.
   *
   * @static
   * @function
   * @param {Object} target A target object.
   * @param {...Object} objects A list of objects to be copied.
   * @returns {Object} A new object.
   * @example copy(person, {name: 'bob'})
   */
  copy: fn.variadic(function(target, objects) {
    return util.extend(new target.constructor(), [target].concat(objects));
  }),

  /**
   * Gets a property of the target object.
   *
   * @static
   * @curried
   * @function
   * @param {string} property A string representing the property name.
   * @param {Object} target A target object.
   * @returns {*} A property value.
   * @example get('name', person) == 'bob'
   */
  get: fn.curry(function(property, target) {
    return target[property];
  }),

  /**
   * Creates a copy of the `target` object with the `property` set to the
   * `value`.
   *
   * @static
   * @curried
   * @function
   * @param {string} property A string representing the property name.
   * @param {Object} value A property value.
   * @param {Object} target A target object.
   * @returns {Object} A new object.
   * @example set('name', 'bob', person)
   */
  set: fn.curry(function(property, value, target) {
    var object = {};
    object[property] = value;
    return self.copy(target, object);
  }),

  /**
   * Gets many properties of the target object.
   *
   * @static
   * @function
   * @param {Object} target A target object.
   * @param {...string} properties A list of properties.
   * @returns {*} A property value.
   */
  pluck: fn.variadic(function(target, properties) {
    return properties.reduce(function(b, a) {
      return self.set(a, self.get(a, target), b);
    }, {});
  }),
};
