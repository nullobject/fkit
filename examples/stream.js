/**
 * Stream example.
 *
 * @author Josh Bassett
 */

var core    = require('../src/core'),
    fn      = require('../src/fn'),
    obj     = require('../src/obj'),
    request = require('superagent'),
    Stream  = require('../src/stream');

var URL = 'http://www.random.org/strings/?num=@&len=8&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new';

function splitOnNewline(x) {
  return x.trim().split(/\n/);
}

function randomNumbers(count) {
  return Stream
    .fromCallback(doRequest)
    .map(core.compose(splitOnNewline, obj.get('text')));

  function doRequest(callback) {
    request
      .get(URL.replace('@', count))
      .end(callback);
  }
}

function show(result) {
  document
    .getElementById('results')
    .appendChild(
      core.tap(function(li) {
        li.appendChild(document.createTextNode(result.join(', ')));
      }, document.createElement('li'))
    );
}

var more = Stream.fromEvent(document.getElementById('more'), 'click').map(core.const(1)),
    less = Stream.fromEvent(document.getElementById('less'), 'click').map(core.const(-1));

more
  .merge(less)
  .scan(1, fn.add)
  .map(fn.max(1))
  .flatMap(randomNumbers)
  .subscribe(show);
