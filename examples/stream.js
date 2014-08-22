var fkit    = require('../src/fkit'),
    fn      = fkit.fn,
    obj     = fkit.obj,
    request = require('superagent'),
    Bus     = fkit.Bus;
    Stream  = fkit.Stream;

var URL = 'http://www.random.org/strings/?num=@&len=8&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new';

function splitOnNewline(x) {
  return x.trim().split(/\n/);
}

function randomNumbers(count) {
  var f = function(callback) {
    request
      .get(URL.replace('@', count))
      .end(callback);
  };

  return Stream
    .fromCallback(f)
    .map(obj.get('text'))
    .map(splitOnNewline);
}

var up   = Stream.fromEvent(document.getElementById('up'), 'click').map(fn.constant(1)),
    down = Stream.fromEvent(document.getElementById('down'), 'click').map(fn.constant(-1));

up.merge(down)
  .scan(1, fn.add)
  .flatMap(randomNumbers)
  .subscribe(fkit.log);
