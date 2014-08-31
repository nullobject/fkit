'use strict';

var fn = require('./fn');

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
  get: fn.curry(get),

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
  }),

  /**
   * Applies the function of the `property` on the `target` object to the value `a`.
   *
   * This function is curried by default.
   *
   * @param {string} property A string representing the property name.
   * @param {*} a
   * @param {Object} target A target object.
   * @returns {*} The result.
   * @example apply('say', 'hello', person) == person.say('hello')
   */
  apply: fn.curry(function(property, a, target) {
    return get(property, target).call(target, a);
  })
};
