## Unreleased

* Update `get` function to accept a key path
* Remove `getIn` function
* Update `set` function to accept a key path

## 3.0.2 (2019-04-09)

* Fix issue with rollup config

## 3.0.1 (2019-04-02)

* Add `groupBy` to exported functions

## 3.0.0 (2019-04-02)

* Rename `group` -> `chunk`
* Rename `groupBy` -> `chunkBy`

## 2.0.0 (2019-03-07)

* Use Array.from to convert iterables to arrays
* Add `tuple` function
* Export curried and uncurried functions

## 1.5.1 (2019-01-26)

* Fix issue where duplicate values weren't removed by `difference` and `differenceBy` functions
* Restore `zipWith` function

## 1.5.0 (2019-01-02)

* Allow `getIn` keypath to be given as a string
* Extract all functions to separate files
* Change to documentation.js for API docs
* Rename `equal` -> `eq`
* Rename `notEqual` -> `neq`

## 1.4.0 (2018-01-31)

* Add generalised `unionBy`, `intersectBy`, and `differenceBy` functions

## 1.3.0 (2018-01-29)

* Fix issue with copy function
* Fix between function summary

## 1.2.0 (2018-01-23)

* Add between function
* Update deps
* Add watch task
* Remove contribute section from readme
* Fix documentation

## 1.1.0 (2017-12-29)

* Add clamp function
* Add even and odd functions

## 1.0.5 (2017-12-24)

* Add comparator function documentation to*By functions
* Fix example for difference function
* Fix issue in groupBy function
* Fix issue in dropWhile function
* Remove uglify-es
* Add filesize rollup plugin

## 1.0.4 (2017-12-19)

* Update babel/rollup config
* Remove bower file
* Fix always function example

## 1.0.1 (2017-12-14)

* Include build dir in the npm package

## 1.0.0 (2017-12-14)

* Refactor to ES6 modules

## 0.17.1 (2017-12-09)

* Switch to rollup for bundling
* Replace jshint with standard

## 0.16.3 (2017-12-04)

* Update dependencies
* Fix logo in readme

## 0.16.2 (2014-11-26)

* Fix a bug in minimum/maximumBy

## 0.16.1 (2014-11-17)

* Remove empty npm shrinkwrap

## 0.16.0 (2014-11-17)

* Curry the sortBy function
* Add minimum/maximumBy functions
* Shrinkwrap dependencies
* Exclude CNAME in rsync
* Fix documentation for .flip function

## 0.15.0 (2014-10-28)

* Add .getIn function to obj
* Documentation
* Cleanups

## 0.14.0 (2014-10-23)

* Add .applyMethod function

## 0.13.1 (2014-10-19)

* Fix an issue where the sort function weren't included in the fkit module
* Don't include examples in API docs

## 0.13.0 (2014-10-19)

* Add .sort/.sortBy functions
* Fix .sample to duplicate elements
* Fix .drop/.take to work with list of strings
* Remove signal examples

## 0.12.0 (2014-10-16)

* Remove signal class (this may be extracted into another library)
* Fix the .concatMap function
* Add .shuffle function
* Fix the .sample function
* Update logo
* Refactor tests

## 0.11.1 (2014-10-16)

* Fix .sample to return a string when sampling a string

## 0.11.0 (2014-10-15)

* Add .sample function
* Add .randomInt/.randomFloat functions
* Add .update function
* Add .subsequences function
* Add .permutations function
* Documentation

## 0.10.0 (2014-10-14)

* Add .omit function
* Change .pick to a curried function
* Add .keys/.values functions

## 0.9.0 (2014-10-14)

* Add .pairs function
* Curry .flip function
* Fix signal example
* Documentation

## 0.8.2 (2014-10-08)

* Add strict and non-strict equality operators
* Documentation

## 0.8.1 (2014-10-07)

* Add #inits and #tails functions
* Add #isPrefixOf, #isSuffixOf, and #isInfixOf functions

## 0.8.0 (2014-10-06)

* Add #nub function
* Rename #without -> #remove and add #removeBy function
* Fix an issue with handling duplicate values in set functions
* Fix in the #variadic function when passing arrays of arguments
* Add #cartesian function
* Fix an issue where the #map function would concat strings
* Fix a bug in #concat
* Fix a bug in #append for nested lists

## 0.7.2 (2014-10-05)

* Add #group and #groupBy functions
* Add #neq function
* Add #maximum, #minimum, #sum, and #product functions
* Update the #min and #max functions to handle strings

## 0.7.1 (2014-10-04)

* Add #uncurry function
* Added #span function
* Add #splitAt function
* Add #takeWhile and #dropWhile functions
* Documentation

## 0.7.0 (2014-10-02)

* Remove #applyAll function
* Rename pluck -> pick
* Add #take and #drop functions
* Add #elemIndex, #elemIndices, #findIndex and #findIndices functions
* Add #partition function
* Add #find function
* Documentation
* More examples
* Fix an issue with concatenating arrays and strings

## 0.6.0 (2014-09-24)

* Move #whereAll/Any to logic module
* Rename eql -> eq
* Update webpack version
* Add list.set module
* Rename Signal#flatMap -> Signal#concatMap
* Add #elem function
* Use F in readme examples

## 0.5.4 (2014-09-21)

* Alias fkit as F
* Change to the jsdoc-react template

## 0.5.3 (2014-09-20)

* Documentation cleanups
* Add #compare function
* Add #replace function
* Add license section to readme
* Add #surround function
* Add #all, #any, #whereAll, and #whereAny functions
* Add #applyAll function
* Add #pluck function

## 0.5.2 (2014-09-16)

* Add #apply2 and #apply3 functions

## 0.5.1 (2014-09-16)

* Fix issue where base module wasn't mixed in

## 0.5.0 (2014-09-16)

* Refactor modules
* Change #range function to take a length argument
* Add #array function
* Fix an issue in the #intersperse function

## 0.4.6 (2014-09-15)

* Add #intersperse function
* Fix an issue in the #zipWith function
* Add #replicate function
* Add #empty function
* Add #length function

## 0.4.5 (2014-09-15)

* Add #unzip function
* Rename #tuple -> #pair

## 0.4.4 (2014-09-15)

* Add #zipWith and #tuple functions
* Add #zip function
* Add CodePen examples to readme
* Fix a bug in the #curry function
* Change travis notification settings

## 0.4.3 (2014-09-13)

* Flip the args to #append and #prepend
* Add #toUpper and #toLower methods

## 0.4.2 (2014-09-13)

* Update the combinators to work with strings

## 0.4.1 (2014-09-13)

* Update #head, #tail, #init, #last, and #reverse to work with strings

## 0.4.0 (2014-09-13)

* Rename stream -> signal and remove bus
* Extract util module

## 0.3.4 (2014-09-13)

* Add #concatMap function
* Fix examples in readme
* Fix an issue in makefile where gh-pages could cause conflicts

## 0.3.3 (2014-09-12)

* Add #reverse function
* Add example to readme

## 0.3.2 (2014-09-12)

* Fix an issue with unary variadic functions
* Ensure gh-pages is up to date before syncing the docs

## 0.3.1 (2014-09-12)

* Add array functions
* Add #foldRight and #scanRight functions
* Webpack config cleanups

## 0.3.0 (2014-09-09)

* Move fn and obj into fkit namespace

## 0.2.4 (2014-09-09)

* Add a #branch function
* Flip the arguments to the math functions
* Rename #concat -> #append and add the real #concat function
* Rename #identity -> #id

## 0.2.3 (2014-09-06)

* Don't ignore the build dir

## 0.2.2 (2014-09-06)

* Tidy up package files

## 0.2.1 (2014-09-06)

* Add bump & release tasks to makefile
* Add bower.json
* Add examples to readme
* Update doc task to ensure removals are tracked
* Add a timer example
* Alias the core module to fkit
* Add zip function to stream
* Add map, filter, fold, and scan to fn module
* Remove src dir from npmignore
* Fix webpack config
* Add prod tasks to makefile
* Fix stream example
* Don't curry nullary or unary functions
* Don't build with node 0.8.x
* Add travis badge to readme
* Change test script to mocha
* Stream cleanups
* Add travis.yml
* Fix the jsdoc for fn.range

## 0.2.0 (2014-09-04)

* Tweak module descriptions
* Rename util -> fn
* Rename fn -> core
* Cleanups
* Add #negate function to util module
* Add #not function to util module
* Add #mod function to util module
* Update doc task to generate and publish docs
* Update readme
* Allow multiple functions to be composed
* Cleanups
* Cleanup the stream example
* Add the #tap function to the fn module
* Split modules into fn, obj, and util
* Add env argument to #curry
* Update readme
* Merge branch 'bug/bus'
* Fix stream example
* Fix Bus class
* Add Stream#split
* Add functions to function module
* Add obj#apply function
* Add context to jshintrc
* Cleanups
* Add Stream class comment
* Tweak the fn.identity comment
* Add obj.binary function
* Document and test everything
* Add jsdoc to dev dependencies
* Ignore the doc directory
* Add a unary function
* Remove unit function
* Add test for fromPromise
* Allow merging multiple streams
* Add a stream example
* Add a Bus
* Add functions to Stream
* Switch order of arguments to #set
* Add arithmetic and logical functions
* Cleanups
* Add #get function
* Add .fromArray, .fromEvent, and #fold to stream
* Add #identity function
* Cleanups
* Change stream module to expose the constructor
* Update jshintrc
* Add stream module
* Cleanups
* Add #compose function
* Extract a function module
* Add #curry function

## 0.1.0 (2014-08-19)

* Add #set function
* Fix index
* Create LICENSE.md
* Initial import
