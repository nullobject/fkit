/* global describe, it, expect */

'use strict';

var object = require('../src/object');

function MyObject() {}
MyObject.prototype.constructor = MyObject;

function buildObject() {
  var o = new MyObject();

  o.a = 'lorem';
  o.b = 'ipsum';
  o.c = 1;
  o.d = 2;

  return o;
}

describe('copy', function() {
  var target = buildObject(),
      result = object.copy(target, {b: 'dolor'}, {c: 0});

  it('should copy the properties of the given objects', function() {
    expect(result).to.have.property('a', 'lorem');
    expect(result).to.have.property('b', 'dolor');
    expect(result).to.have.property('c', 0);
    expect(result).to.have.property('d', 2);
  });

  it('should not mutate the target object', function() {
    expect(target).to.have.property('a', 'lorem');
    expect(target).to.have.property('b', 'ipsum');
    expect(target).to.have.property('c', 1);
    expect(target).to.have.property('d', 2);
  });

  it('should preserve the prototype of the target object', function() {
    expect(result).to.be.instanceof(MyObject);
  });
});

describe('set', function() {
  var target = buildObject(),
      result = object.set(target, 'b', 'dolor');

  it('should set the given property', function() {
    expect(result).to.have.property('a', 'lorem');
    expect(result).to.have.property('b', 'dolor');
    expect(result).to.have.property('c', 1);
    expect(result).to.have.property('d', 2);
  });

  it('should not mutate the target object', function() {
    expect(target).to.have.property('a', 'lorem');
    expect(target).to.have.property('b', 'ipsum');
    expect(target).to.have.property('c', 1);
    expect(target).to.have.property('d', 2);
  });

  it('should preserve the prototype of the target object', function() {
    expect(result).to.be.instanceof(MyObject);
  });
});
