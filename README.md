# FKit [![Build Status](https://travis-ci.org/nullobject/fkit.svg?branch=master)](https://travis-ci.org/nullobject/fkit)

FKit is a [functional
programming](http://en.wikipedia.org/wiki/Functional_programming) library for
JavaScript. It consists of a small number of functions and classes that are
squarely focused on everyday utility. This provides developers with functional
programming "building blocks" that they can use to write better, more
expressive code.

## Documentation

* [API documentation](http://nullobject.github.io/fkit/)

## Installing

### Browser

Download the [fkit.js](https://raw.githubusercontent.com/nullobject/fkit/master/build/fkit.js) minified library.

Then load it in a script tag:

```html
<script src="fkit.js"></script>
<script>
  console.log(fkit.add(1)(2));
</script>
```

### Node

Install the npm package:

```
> npm install fkit
```

Then require it:

```js
var fkit = require('fkit');
console.log(fkit.add(1)(2));
```

### Bower

Install the bower component:

```
> bower install fkit
```

## Examples

### Curried Functions

[Currying](http://en.wikipedia.org/wiki/Currying) is a technique for
transforming a function which takes multiple arguments into a sequence of
functions that each take one argument.

We can use the `fkit.curry` function to curry a given function:

```js
function add(a, b) { return a + b; }
var f = fkit.curry(add);
f(1)(2);
=> 3
```

The [`fkit.fn`](http://nullobject.github.io/fkit/module-fn.html) module
provides curried versions for many of the standard JavaScript functions and
operators. Using the `fkit.fn.add` function (which is the curried version of
the `+` operator) the above code can be rewritten as:

```js
fkit.fn.add(1)(2);
=> 3
```

### Partial Application

If we don't specify all the arguments to a curried function, then instead of a
result we get what is known as a *partially applied function*. This is useful
because the partially applied function can be used in further calculations.

For example, we can partially apply the `fkit.fn.mul` function to the value
`2`. This results in a new function which multiplies a given number by two:

```js
var f = fkit.fn.mul(2);
f(1);
=> 2
f(2);
=> 4
f(3);
=> 6
```

### Function Composition

The `fkit.compose` function can be used to compose two or more functions
together into a new function.

This function adds one to a given number, then multiplies it by two and
subtracts three:

```js
var f = fkit.compose(fkit.fn.sub(3), fkit.fn.mul(2), fkit.fn.add(1));
f(1);
=> 1
f(2);
=> 3
f(3);
=> 5
```

### Combinators

FKit provides curried versions of all your favourite combinators: map, filter, fold, and scan.

#### Map

Using `fkit.map` we can map a function over a list. Here we multiply every
number in the list by two:

```js
var f = fkit.map(fkit.fn.mul(2));
f([1, 2, 3]);
=> [2, 3, 4]
```

#### Filter

Using `fkit.filter` we can filter a list using a *predicate function*. In this
example we filter all numbers in the list that are greater than one:

```js
var f = fkit.filter(fkit.fn.gt(1));
f([1, 2, 3]);
=> [2, 3]
```

#### Fold

Using `fkit.fold` we can fold a list with a binary function and get a single
value. Here we sum all the numbers in the list:

```js
var f = fkit.fold(fkit.fn.add, 0);
f([1, 2, 3]);
=> 6
```

#### Scan

Using `fkit.scan` we can scan a list with a binary function and a list of
values. Here we again sum all the numbers in the list and get the intermediate
values:

```js
var f = fkit.scan(fkit.fn.add, 0);
f([1, 2, 3]);
=> [0, 1, 3, 6]
```

## Contributing

### Build

Build FKit:

```
> make build
```

### Test

Run the tests:

```
> make test
```

### Release

Ship a new release x.y.z:

```
> make release version=x.y.z
```
