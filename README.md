# FKit [![Build Status](https://travis-ci.org/nullobject/fkit.svg?branch=master)](https://travis-ci.org/nullobject/fkit)

FKit is a [functional
programming](http://en.wikipedia.org/wiki/Functional_programming) library for
JavaScript. It consists of a small number of functions and classes that are
squarely focused on everyday utility. This provides developers with functional
programming "building blocks" that they can use to write better, more
expressive code.

## Documentation

* [API documentation](http://nullobject.github.io/fkit/)

## Examples

* [Functions](http://codepen.io/nullobject/pen/dbAkl?editors=001)
* [Strings](http://codepen.io/nullobject/pen/hnDEe?editors=001)
* [Arrays](http://codepen.io/nullobject/pen/vbcCr?editors=001)
* [Objects](http://codepen.io/nullobject/pen/rKszh?editors=001)
* [Branching](http://codepen.io/nullobject/pen/LdtDK?editors=001)
* [Signals](http://codepen.io/nullobject/pen/zxJlv?editors=001)

## Installing

### Browser

Download the
[fkit.js](https://raw.githubusercontent.com/nullobject/fkit/master/dist/fkit.js)
minified library.

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

## License

FKit is licensed under the MIT license. See the
[LICENSE](https://github.com/nullobject/fkit/blob/master/LICENSE.md) file for
more details.
