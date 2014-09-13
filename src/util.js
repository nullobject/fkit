'use strict';

module.exports = {
  extend: function(target, objects) {
    objects.forEach(function(object) {
      Object.getOwnPropertyNames(object).forEach(function(property) {
        target[property] = object[property];
      });
    });
    return target;
  },

  slice: Array.prototype.slice
};
