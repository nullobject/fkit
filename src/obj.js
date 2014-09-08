'use strict';

var core = require('./core');

function extend(target, objects) {
  objects.forEach(function(object) {
    Object.getOwnPropertyNames(object).forEach(function(property) {
      target[property] = object[property];
    });
  });

  return target;
}

function copy(target, objects) {
  return extend(new target.constructor(), [target].concat(objects));
}

function get(property, target) {
  return target[property];
}

/**
 * This module defines the object immutability helper functions.
 *
 * @module obj
 * @author Josh Bassett
 */
module.exports = {
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
  copy: core.variadic(copy),

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
  get: core.curry(get),

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
  set: core.curry(function(property, value, target) {
    var object = {};
    object[property] = value;
    return copy(target, [object]);
  }),

  /**
   * Applies the function of the `property` on the `target` object to the value `a`.
   *
   * @static
   * @curried
   * @function
   * @param {string} property A string representing the property name.
   * @param {*} a
   * @param {Object} target A target object.
   * @returns {*} The result.
   * @example apply('say', 'hello', person) == person.say('hello')
   */
  apply: core.curry(function(property, a, target) {
    return get(property, target).call(target, a);
  })
};
