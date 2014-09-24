# FKit [![Build Status](https://travis-ci.org/nullobject/fkit.svg?branch=master)](https://travis-ci.org/nullobject/fkit)

FKit is a [functional
programming](http://en.wikipedia.org/wiki/Functional_programming) library for
JavaScript. It provides a number of functions and classes, which are sharply
focused on everyday utility, for working with arrays, strings, and objects.
This empowers developers with the functional programming "building blocks" that
they can use to write better, more expressive code.

Features:

* Functions are [curried](http://en.wikipedia.org/wiki/Currying) by default, so
  you can [partially apply]() them like a pro.
* The ordering of arguments to functions is more "natural", this means they are
  highly composable.
* Strings are treated as lists, so you can easily apply combinators like `map`,
  `filter`, and `fold`.

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

```bash
> npm install fkit
```

Then require it in your code:

```js
var F = require('fkit');
console.log(F.add(1, 2));
```

### Bower

Install the bower component:

```bash
> bower install fkit
```

## Contribute

### Build

Build FKit:

```bash
> make build
```

### Test

Run the tests:

```bash
> make test
```

### Release

Ship a new release x.y.z:

```bash
> make release version=x.y.z
```

## License

FKit is licensed under the MIT license. See the
[LICENSE](https://github.com/nullobject/fkit/blob/master/LICENSE.md) file for
more details.
