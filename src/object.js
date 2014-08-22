'use strict';

var fn = require('./function');

function copy(target, objects) {
  return extend(new target.constructor(), [target].concat(objects));
}

function extend(target, objects) {
  objects.forEach(function(object) {
    Object.getOwnPropertyNames(object).forEach(function(property) {
      target[property] = object[property];
    });
  });

  return target;
}

function get(property, target) {
  return target[property];
}

function set(property, value, target) {
  var object = {};
  object[property] = value;
  return copy(target, [object]);
}

module.exports = {
  copy: fn.variadic(copy),
  get:  fn.curry(get),
  set:  fn.curry(set)
};
