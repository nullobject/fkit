'use strict';

var sort = require('../../src/list/sort');

describe('list.sort', function() {
  describe('#sort', function() {
    it('should handle an array of numbers', function() {
      expect(sort.sort([2, 3, 1])).to.eql([1, 2, 3]);
    });

    it('should handle a string', function() {
      expect(sort.sort('bca')).to.eql('abc');
    });
  });

  describe('#sortBy', function() {
    function c(a, b) {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }

    it('should handle an array of numbers', function() {
      expect(sort.sortBy(c)([2, 3, 1])).to.eql([3, 2, 1]);
    });

    it('should handle a string', function() {
      expect(sort.sortBy(c)('bca')).to.eql('cba');
    });
  });
});
