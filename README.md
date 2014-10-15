<h1 align="center"><img alt="FKit" src="https://github.com/nullobject/fkit/blob/master/logo.png" width="256px" /></h1>

[![Build Status](https://travis-ci.org/nullobject/fkit.svg?branch=master)](https://travis-ci.org/nullobject/fkit)

FKit (pronounced eff-kit) is a [functional
programming](http://en.wikipedia.org/wiki/Functional_programming) toolkit for
JavaScript. It provides many functions for solving common problems with
functions, objects, arrays, and strings. It aims to provide reusable building
blocks while maintaining a laser focus on everyday utility.

Features:

* Why reinvent the wheel? FKit provides many functions for solving common
  problems with functions, arrays, objects, and strings.
* FKit treats both strings and arrays as *lists*, this means you can apply the
  same list functions to both strings and arrays (e.g. `head`, `tail`, `map`,
  `filter`, and `fold`).
* Most FKit functions are already
  [curried](http://en.wikipedia.org/wiki/Currying) by default, so you can
  [partially apply](http://en.wikipedia.org/wiki/Partial_application) them
  wherever you need to.
* The ordering of arguments to FKit functions is carefully designed to be more
  natural, this makes them highly
  [composable](http://en.wikipedia.org/wiki/Function_composition).
* It's very compact, roughly 3 KB when minified and gzipped!

## Documentation

* [API documentation](http://nullobject.github.io/fkit/api.html)
* Presentation by Josh Bassett: [Everyday Functional Programming in
  JavaScript](https://speakerdeck.com/nullobject/fkit-everyday-functional-programming-in-javascript)
* Article by Josh Bassett: [Take Your Code to the Next Level with
  FKit](http://joshbassett.info/2014/take-your-code-to-the-next-level-with-fkit/)

## Examples

```js
// Sum the numbers in a list.
F.sum([1, 2, 3]); // 6

// Stash a string.
F.map(F.surround('{', '}'), 'hello'); // '{h}{e}{l}{l}{o}'

// Intersperse the numbers in a list with another number.
F.intersperse(4, [1, 2, 3]); // [1, 4, 2, 4, 3]

// Filter the numbers in a list where 1 < n < 5.
[1, 2, 3, 4, 5].filter(F.whereAll([F.gt(1), F.lt(5)])); // [2, 3, 4]

// Calculate the cartesian product of two lists.
F.cartesian([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]

// Calculate the permutations of a list.
F.permutations('abc'); // ['abc', 'bac', 'cba', 'bca', 'cab', 'acb']
```

Check out some more examples:

* [Functions](http://codepen.io/nullobject/pen/dbAkl?editors=001)
* [Strings](http://codepen.io/nullobject/pen/hnDEe?editors=001)
* [Arrays](http://codepen.io/nullobject/pen/vbcCr?editors=001)
* [Objects](http://codepen.io/nullobject/pen/rKszh?editors=001)
* [Branching](http://codepen.io/nullobject/pen/LdtDK?editors=001)

## Download

Download the
[fkit.js](https://raw.githubusercontent.com/nullobject/fkit/master/dist/fkit.js)
minified library.

### Node

Install the npm package:

```sh
> npm install fkit
```

Require it in your code:

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

Build the library:

```sh
> make production
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
