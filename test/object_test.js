/* global describe, it, expect */

'use strict';

var object = require('../src/object.js');

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
  var target = buildObject();

  it('should copy the properties of the given objects', function() {
    var copy = object.copy(target, {b: 'dolor'}, {c: 0});
    expect(copy).to.have.property('a', 'lorem');
    expect(copy).to.have.property('b', 'dolor');
    expect(copy).to.have.property('c', 0);
    expect(copy).to.have.property('d', 2);
  });

  it('should not mutate the target object', function() {
    object.copy(target, {b: 'dolor'}, {c: 0});
    expect(target).to.have.property('a', 'lorem');
    expect(target).to.have.property('b', 'ipsum');
    expect(target).to.have.property('c', 1);
    expect(target).to.have.property('d', 2);
  });

  it('should preserve the prototype of the target object', function() {
    expect(object.copy(target)).to.be.instanceof(MyObject);
  });
});

describe('extend', function() {
  var target = buildObject();

  it('should extend the target with the given objects', function() {
    object.extend(target, {b: 'dolor'}, {c: 0});
    expect(target).to.have.property('a', 'lorem');
    expect(target).to.have.property('b', 'dolor');
    expect(target).to.have.property('c', 0);
    expect(target).to.have.property('d', 2);
  });
});

describe('set', function() {
  var target = buildObject();

  it('should set the given property', function() {
    var copy = object.set(target, 'b', 'dolor');
    expect(copy).to.have.property('a', 'lorem');
    expect(copy).to.have.property('b', 'dolor');
    expect(copy).to.have.property('c', 1);
    expect(copy).to.have.property('d', 2);
  });

  it('should not mutate the target object', function() {
    object.set(target, 'b', 'dolor');
    expect(target).to.have.property('a', 'lorem');
    expect(target).to.have.property('b', 'ipsum');
    expect(target).to.have.property('c', 1);
    expect(target).to.have.property('d', 2);
  });

  it('should preserve the prototype of the target object', function() {
    expect(object.set(target, 'b', 'dolor')).to.be.instanceof(MyObject);
  });
});
