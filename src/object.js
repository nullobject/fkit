/** @author Josh Bassett */

'use strict';

var fn = require('./function');

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

/**
 * @module obj
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
  copy: fn.variadic(copy),

  /**
   * Gets a property of the target object.
   *
   * This function is curried by default.
   *
   * @static
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
   * This function is curried by default.
   *
   * @static
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
    return copy(target, [object]);
  })
};
