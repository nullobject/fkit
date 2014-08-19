'use strict';

var __slice = Array.prototype.slice;

function variadic(fn) {
  var arity = fn.length;

  if (arity < 1) {
    return fn;
  } else if (arity === 1)  {
    return function() {
      return fn.call(this, __slice.call(arguments, 0));
    };
  } else {
    return function() {
      var numArgs      = arguments.length,
          namedArgs    = __slice.call(arguments, 0, arity - 1),
          missingArgs  = Math.max(arity - numArgs - 1, 0),
          padding      = new Array(missingArgs),
          variadicArgs = __slice.call(arguments, fn.length - 1);

      return fn.apply(this, namedArgs.concat(padding).concat([variadicArgs]));
    };
  }
}

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

module.exports = {
  copy: variadic(copy),

  extend: variadic(extend),

  set: function(target, property, value) {
    var object = {};
    object[property] = value;
    return copy(target, [object]);
  }
};
