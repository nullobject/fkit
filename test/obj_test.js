'use strict';

var obj = require('../src/obj');

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.a = 'lorem';
  o.b = 'ipsum';
  o.c = 1;

  return o;
}

describe('object', function() {
  var target = buildObject();

  describe('#copy', function() {
    var result = obj.copy(target, {b: 'dolor'}, {c: 0});

    it('should copy the properties of the given objects', function() {
      expect(result).to.eql({a: 'lorem', b: 'dolor', c: 0});
    });

    it('should not mutate the target object', function() {
      expect(target).to.eql(target);
    });

    it('should preserve the prototype of the target object', function() {
      expect(result).to.be.instanceof(MyObject);
    });
  });

  describe('#get', function() {
    it('should get the given property', function() {
      expect(obj.get('a', target)).to.eql('lorem');
      expect(obj.get('b', target)).to.eql('ipsum');
      expect(obj.get('c', target)).to.eql(1);
    });
  });

  describe('#set', function() {
    it('should set the given property', function() {
      var result = obj.set('b', 'dolor', target);
      expect(result).to.eql({a: 'lorem', b: 'dolor', c: 1});
    });
  });

  describe('#update', function() {
    it('should update the given property', function() {
      function f(a) { return a + 1; }
      var result = obj.update('c', f, target);
      expect(result).to.eql({a: 'lorem', b: 'ipsum', c: 2});
    });
  });

  describe('#pick', function() {
    it('should copy the given object with the properties', function() {
      var result = obj.pick(['a', 'b'])(target);
      expect(result).to.eql({a: 'lorem', b: 'ipsum'});
    });
  });

  describe('#omit', function() {
    it('should copy the given object without the properties', function() {
      var result = obj.omit(['a', 'b'])(target);
      expect(result).to.eql({c: 1});
    });
  });

  describe('#pairs', function() {
    it('should return the key-value pairs of the given object', function() {
      var result = obj.pairs(target);
      expect(result).to.eql([['a', 'lorem'], ['b', 'ipsum'], ['c', 1]]);
    });
  });

  describe('#keys', function() {
    it('should return the keys of the given object', function() {
      var result = obj.keys(target);
      expect(result).to.eql(['a', 'b', 'c']);
    });
  });

  describe('#values', function() {
    it('should return the values of the given object', function() {
      var result = obj.values(target);
      expect(result).to.eql(['lorem', 'ipsum', 1]);
    });
  });
});
