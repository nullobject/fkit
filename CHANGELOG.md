v0.15.0 / 2014-10-28
====================

  * Add .getIn function to obj.
  * Documentation.
  * Cleanups.

v0.14.0 / 2014-10-23
====================

  * Add .applyMethod function.

v0.13.1 / 2014-10-19
====================

  * Fix an issue where the sort function weren't included in the fkit module.
  * Don't include examples in API docs.

v0.13.0 / 2014-10-19
====================

  * Add .sort/.sortBy functions.
  * Fix .sample to duplicate elements.
  * Fix .drop/.take to work with list of strings.
  * Remove signal examples.

v0.12.0 / 2014-10-16
====================

  * Remove signal class (this may be extracted into another library).
  * Fix the .concatMap function.
  * Add .shuffle function.
  * Fix the .sample function.
  * Update logo.
  * Refactor tests.

v0.11.1 / 2014-10-16
====================

  * Fix .sample to return a string when sampling a string.

v0.11.0 / 2014-10-15
====================

  * Add .sample function.
  * Add .randomInt/.randomFloat functions.
  * Add .update function.
  * Add .subsequences function.
  * Add .permutations function.
  * Documentation.

v0.10.0 / 2014-10-14
====================

  * Add .omit function.
  * Change .pick to a curried function.
  * Add .keys/.values functions.

v0.9.0 / 2014-10-14
===================

  * Add .pairs function.
  * Curry .flip function.
  * Fix signal example.
  * Documentation.

v0.8.2 / 2014-10-08
===================

  * Add strict and non-strict equality operators.
  * Documentation.

v0.8.1 / 2014-10-07
===================

  * Add #inits and #tails functions.
  * Add #isPrefixOf, #isSuffixOf, and #isInfixOf functions.

v0.8.0 / 2014-10-06
===================

  * Add #nub function.
  * Rename #without -> #remove and add #removeBy function.
  * Fix an issue with handling duplicate values in set functions.
  * Fix in the #variadic function when passing arrays of arguments.
  * Add #cartesian function.
  * Fix an issue where the #map function would concat strings.
  * Fix a bug in #concat.
  * Fix a bug in #append for nested lists.

v0.7.2 / 2014-10-05
===================

  * Add #group and #groupBy functions.
  * Add #neq function.
  * Add #maximum, #minimum, #sum, and #product functions.
  * Update the #min and #max functions to handle strings.

v0.7.1 / 2014-10-04
===================

  * Add #uncurry function.
  * Added #span function.
  * Add #splitAt function.
  * Add #takeWhile and #dropWhile functions.
  * Documentation.

v0.7.0 / 2014-10-02
===================

  * Remove #applyAll function.
  * Rename pluck -> pick.
  * Add #take and #drop functions.
  * Add #elemIndex, #elemIndices, #findIndex and #findIndices functions.
  * Add #partition function.
  * Add #find function.
  * Documentation.
  * More examples.
  * Fix an issue with concatenating arrays and strings.

v0.6.0 / 2014-09-24
==================

 * Move #whereAll/Any to logic module.
 * Rename eql -> eq.
 * Update webpack version.
 * Add list.set module.
 * Rename Signal#flatMap -> Signal#concatMap.
 * Add #elem function.
 * Use F in readme examples.

v0.5.4 / 2014-09-21
==================

 * Alias fkit as F.
 * Change to the jsdoc-react template.

v0.5.3 / 2014-09-20
==================

 * Documentation cleanups.
 * Add #compare function.
 * Add #replace function.
 * Add license section to readme.
 * Add #surround function.
 * Add #all, #any, #whereAll, and #whereAny functions.
 * Add #applyAll function.
 * Add #pluck function.

v0.5.2 / 2014-09-16
==================

 * Add #apply2 and #apply3 functions.

v0.5.1 / 2014-09-16
==================

 * Fix issue where base module wasn't mixed in.

v0.5.0 / 2014-09-16
==================

 * Refactor modules.
 * Change #range function to take a length argument.
 * Add #array function.
 * Fix an issue in the #intersperse function.

v0.4.6 / 2014-09-15
==================

 * Add #intersperse function.
 * Fix an issue in the #zipWith function.
 * Add #replicate function.
 * Add #empty function.
 * Add #length function.

v0.4.5 / 2014-09-15
==================

 * Add #unzip function.
 * Rename #tuple -> #pair.

v0.4.4 / 2014-09-15
==================

 * Add #zipWith and #tuple functions.
 * Add #zip function.
 * Add CodePen examples to readme.
 * Fix a bug in the #curry function.
 * Change travis notification settings.

v0.4.3 / 2014-09-13
==================

 * Flip the args to #append and #prepend.
 * Add #toUpper and #toLower methods.

v0.4.2 / 2014-09-13
==================

 * Update the combinators to work with strings.

v0.4.1 / 2014-09-13
==================

 * Update #head, #tail, #init, #last, and #reverse to work with strings.

v0.4.0 / 2014-09-13
==================

 * Rename stream -> signal and remove bus.
 * Extract util module.

v0.3.4 / 2014-09-13
==================

 * Add #concatMap function.
 * Fix examples in readme.
 * Fix an issue in makefile where gh-pages could cause conflicts.

v0.3.3 / 2014-09-12
==================

 * Add #reverse function.
 * Add example to readme.

v0.3.2 / 2014-09-12
==================

 * Fix an issue with unary variadic functions.
 * Ensure gh-pages is up to date before syncing the docs.

v0.3.1 / 2014-09-12
==================

 * Add array functions.
 * Add #foldRight and #scanRight functions.
 * Webpack config cleanups.

v0.3.0 / 2014-09-09
==================

 * Move fn and obj into fkit namespace.

v0.2.4 / 2014-09-09
==================

 * Add a #branch function.
 * Flip the arguments to the math functions.
 * Rename #concat -> #append and add the real #concat function.
 * Rename #identity -> #id.

v0.2.3 / 2014-09-06
==================

 * Don't ignore the build dir.

v0.2.2 / 2014-09-06
==================

 * Tidy up package files.

v0.2.1 / 2014-09-06
==================

 * Add bump & release tasks to makefile.
 * Add bower.json.
 * Add examples to readme.
 * Update doc task to ensure removals are tracked.
 * Add a timer example.
 * Alias the core module to fkit.
 * Add zip function to stream.
 * Add map, filter, fold, and scan to fn module.
 * Remove src dir from npmignore.
 * Fix webpack config.
 * Add prod tasks to makefile.
 * Fix stream example.
 * Don't curry nullary or unary functions.
 * Don't build with node 0.8.x.
 * Add travis badge to readme.
 * Change test script to mocha.
 * Stream cleanups.
 * Add travis.yml.
 * Fix the jsdoc for fn.range.

v0.2.0 / 2014-09-04
==================

 * Tweak module descriptions.
 * Rename util -> fn.
 * Rename fn -> core.
 * Cleanups.
 * Add #negate function to util module.
 * Add #not function to util module.
 * Add #mod function to util module.
 * Update doc task to generate and publish docs.
 * Update readme.
 * Allow multiple functions to be composed.
 * Cleanups.
 * Cleanup the stream example.
 * Add the #tap function to the fn module.
 * Split modules into fn, obj, and util.
 * Add env argument to #curry.
 * Update readme.
 * Merge branch 'bug/bus'
 * Fix stream example.
 * Fix Bus class.
 * Add Stream#split.
 * Add functions to function module.
 * Add obj#apply function.
 * Add context to jshintrc.
 * Cleanups.
 * Add Stream class comment.
 * Tweak the fn.identity comment.
 * Add obj.binary function.
 * Document and test everything.
 * Add jsdoc to dev dependencies.
 * Ignore the doc directory.
 * Add a unary function.
 * Remove unit function.
 * Add test for fromPromise.
 * Allow merging multiple streams.
 * Add a stream example.
 * Add a Bus.
 * Add functions to Stream.
 * Switch order of arguments to #set.
 * Add arithmetic and logical functions.
 * Cleanups.
 * Add #get function.
 * Add .fromArray, .fromEvent, and #fold to stream.
 * Add #identity function.
 * Cleanups.
 * Change stream module to expose the constructor.
 * Update jshintrc.
 * Add stream module.
 * Cleanups.
 * Add #compose function.
 * Extract a function module.
 * Add #curry function.

v0.1.0 / 2014-08-19
==================

 * Add #set function.
 * Fix index.
 * Create LICENSE.md
 * Initial import.
