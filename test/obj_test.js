'use strict';

var obj = require('../src/obj');

function f() {}
var spy = sinon.spy(f);

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.name    = 'Jane';
  o.age     = 20;
  o.address = {city: 'Melbourne', country: 'Australia'};
  o.hello   = spy;

  return o;
}

describe('object', function() {
  var target = buildObject();

  describe('#applyMethod', function() {
    it('should apply a nullary function', function() {
      obj.applyMethod('hello')()(target);
      expect(spy.calledWithExactly(undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      obj.applyMethod('hello')(1)(target);
      expect(spy.calledWithExactly(1)).to.be.true;
    });
  });

  describe('#applyMethod2', function() {
    it('should apply a nullary function', function() {
      obj.applyMethod2('hello')()()(target);
      expect(spy.calledWithExactly(undefined, undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      obj.applyMethod2('hello')(1)(2)(target);
      expect(spy.calledWithExactly(1, 2)).to.be.true;
    });
  });

  describe('#applyMethod3', function() {
    it('should apply a nullary function', function() {
      obj.applyMethod3('hello')()()()(target);
      expect(spy.calledWithExactly(undefined, undefined, undefined)).to.be.true;
    });

    it('should apply a unary function', function() {
      obj.applyMethod3('hello')(1)(2)(3)(target);
      expect(spy.calledWithExactly(1, 2, 3)).to.be.true;
    });
  });

  describe('#copy', function() {
    var result = obj.copy(target, {age: 21});

    it('should copy the properties of the given objects', function() {
      expect(result).to.eql({name: 'Jane', age: 21, address: {city: 'Melbourne', country: 'Australia'}, hello: spy});
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
      expect(obj.get('name')(target)).to.eql('Jane');
      expect(obj.get('age')(target)).to.eql(20);
      expect(obj.get('address')(target)).to.eql({city: 'Melbourne', country: 'Australia'});
      expect(obj.get('hello')(target)).to.eql(spy);
      expect(obj.get('foo')(target)).to.be.undefined;
    });
  });

  describe('#set', function() {
    it('should set the given property', function() {
      var result = obj.set('name')('Steve')(target);
      expect(result).to.have.property('name', 'Steve');
    });
  });

  describe('#update', function() {
    it('should update the given property', function() {
      var result = obj.update('age')(function(a) { return a + 1; })(target);
      expect(result).to.have.property('age', 21);
    });
  });

  describe('#pick', function() {
    it('should copy the given object with the properties', function() {
      var result = obj.pick(['name', 'age'])(target);
      expect(result).to.eql({name: 'Jane', age: 20});
    });
  });

  describe('#omit', function() {
    it('should copy the given object without the properties', function() {
      var result = obj.omit(['name', 'age', 'address'])(target);
      expect(result).to.eql({hello: spy});
    });
  });

  describe('#pairs', function() {
    it('should return the key-value pairs of the given object', function() {
      var result = obj.pairs(target);
      expect(result).to.eql([['name', 'Jane'], ['age', 20], ['address', {city: 'Melbourne', country: 'Australia'}], ['hello', spy]]);
    });
  });

  describe('#keys', function() {
    it('should return the keys of the given object', function() {
      var result = obj.keys(target);
      expect(result).to.eql(['name', 'age', 'address', 'hello']);
    });
  });

  describe('#values', function() {
    it('should return the values of the given object', function() {
      var result = obj.values(target);
      expect(result).to.eql(['Jane', 20, {city: 'Melbourne', country: 'Australia'}, spy]);
    });
  });
});
