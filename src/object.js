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

function set(target, property, value) {
  var object = {};
  object[property] = value;
  return copy(target, [object]);
}

module.exports = {
  copy: fn.variadic(copy),
  set:  fn.curry(set)
};
