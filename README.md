<h1 align="center"><img alt="FKit" src="https://raw.github.com/nullobject/fkit/master/logo.png" width="107px" /></h1>

[![Build Status](https://travis-ci.org/nullobject/fkit.svg?branch=master)](https://travis-ci.org/nullobject/fkit)

FKit is a [functional
programming](http://en.wikipedia.org/wiki/Functional_programming) library for
JavaScript. It provides a number of functions and classes, which are sharply
focused on everyday utility, for working with strings, arrays, and objects.
This provides developers with functional programming "building blocks" that
they can use to write better, more expressive code.

Features:

* Why reinvent the wheel? FKit provides many functions for solving common
  problems with functions, arrays, objects, and strings.
* Most FKit functions are [curried](http://en.wikipedia.org/wiki/Currying) by
  default, so you can [partially
  apply](http://en.wikipedia.org/wiki/Partial_application) them whenever you
  need to.
* The ordering of arguments to FKit functions is carefully designed to be more
  natural, this makes them highly
  [composable](http://en.wikipedia.org/wiki/Function_composition).
* Strings and arrays are both treated as *lists*, this means you can apply list
  combinators like `map`, `filter`, and `fold` to both strings and arrays.
* It's very compact, roughly 3 KB when minified and gzipped!

## Documentation

* [API documentation](http://nullobject.github.io/fkit/api.html)

## Examples

```js
// Stash a string.
F.map(F.surround('{', '}'), 'hello'); // '{h}{e}{l}{l}{o}'

// Add a list of numbers.
F.fold(F.add, 0, [1, 2, 3]); // 6

// Filter a list of numbers where n > 1 and n < 5.
F.filter(
  F.whereAll([F.gt(1), F.lt(5)]),
  [1, 2, 3, 4, 5]
); // [2, 3, 4]
```

Check out some more examples:

* [Functions](http://codepen.io/nullobject/pen/dbAkl?editors=001)
* [Strings](http://codepen.io/nullobject/pen/hnDEe?editors=001)
* [Arrays](http://codepen.io/nullobject/pen/vbcCr?editors=001)
* [Objects](http://codepen.io/nullobject/pen/rKszh?editors=001)
* [Branching](http://codepen.io/nullobject/pen/LdtDK?editors=001)
* [Signals](http://codepen.io/nullobject/pen/zxJlv?editors=001)

## Download

Download the
[fkit.js](https://raw.githubusercontent.com/nullobject/fkit/master/dist/fkit.js)
minified library.

### Node

Install the npm package:

```sh
> npm install fkit
```

Then require it in your code:

```js
var F = require('fkit');
console.log(F.add(1, 2));
```

### Bower

Install the bower component:

```sh
> bower install fkit
```

## Contribute

### Build

Build FKit:

```sh
> make build
```

### Test

Run the tests:

```sh
> make test
```

### Release

Ship a new release x.y.z:

```sh
> make release version=x.y.z
```

## License

FKit is licensed under the MIT license. See the
[LICENSE](https://github.com/nullobject/fkit/blob/master/LICENSE.md) file for
more details.
