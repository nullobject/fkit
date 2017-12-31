export * from './list/base'
export * from './list/build'
export * from './list/fold'
export * from './list/map'
export * from './list/search'
export * from './list/set'
export * from './list/sort'
export * from './list/sublist'
export * from './list/zip'

/**
 * FKit treats both arrays and strings as *lists*: an array is a list of
 * elements, and a string is a list of characters.
 *
 * Representing strings as lists may be a novel concept for some JavaScript
 * users, but it is quite common in other languages. This seemingly simple
 * abstractions yields a great deal of power: it allows you to apply the same
 * list combinators to both arrays and strings.
 *
 * @summary Working with Lists
 *
 * @module fkit/list
 * @mixes module:fkit/list/base
 * @mixes module:fkit/list/build
 * @mixes module:fkit/list/fold
 * @mixes module:fkit/list/map
 * @mixes module:fkit/list/search
 * @mixes module:fkit/list/set
 * @mixes module:fkit/list/sort
 * @mixes module:fkit/list/sublist
 * @mixes module:fkit/list/zip
 */
