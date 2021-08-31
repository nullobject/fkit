type Function1<A, R> = (a: A) => R
type Function2<A, B, R> = (a: A, b: B) => R
type Function3<A, B, C, R> = (a: A, b: B, c: C) => R

type Predicate1<A> = Function1<A, boolean>
type Predicate2<A, B> = Function2<A, B, boolean>
type Predicate3<A, B, C> = Function3<A, B, C, boolean>

export function add(a: number): (b: number) => number
export function add(a: number, b: number): number

export function all<A>(p: Predicate1<A>, as: A[]): boolean
export function all<A>(p: Predicate1<A>): (as: A[]) => boolean

export function always<A>(a: A): () => A

export function and(a: boolean): (b: boolean) => boolean
export function and(a: boolean, b: boolean): boolean

export function any<A>(p: Predicate1<A>): (as: A[]) => boolean
export function any<A>(p: Predicate1<A>, as: A[]): boolean

export function append(a: string): (as: string) => string
export function append(a: string, as: string): string
export function append<A>(a: A): (as: A[]) => A[]
export function append<A>(a: A, as: A[]): A[]

export function apply<A, R>(f: Function1<A, R>): (a: A) => R
export function apply<A, R>(f: Function1<A, R>, a: A): R

export function apply2<A, B, R>(f: Function2<A, B, R>): (a: A) => (b: B) => R
export function apply2<A, B, R>(f: Function2<A, B, R>, a: A, b: B): R

export function apply3<A, B, C, R>(f: Function3<A, B, C, R>): (a: A) => (b: B) => (c: C) => R
export function apply3<A, B, C, R>(f: Function3<A, B, C, R>, a: A, b: B, c: C): R

export function applyMethod<T, K extends keyof T>(k: K): (a: any) => (o: T) => T
export function applyMethod<T, K extends keyof T>(k: K, a: any, o: T): T

export function applyMethod2<T, K extends keyof T>(k: K): (a: any) => (b: any) => (o: T) => T
export function applyMethod2<T, K extends keyof T>(k: K, a: any, b: any, o: T): T

export function applyMethod3<T, K extends keyof T>(k: K): (a: any) => (b: any) => (c: any) => (o: T) => T
export function applyMethod3<T, K extends keyof T>(k: K, a: any, b: any, c: any, o: T): T

export function applyRight<R, A>(a: A): (f: Function1<A, R>) => R
export function applyRight<R, A>(a: A, f: Function1<A, R>): R

export function array<A>(n: number): A[]

export function between(a: number): (b: number) => (n: number) => boolean
export function between(a: number, b: number, n: number): boolean

export function branch<A, B>(p: Predicate1<A>): (f: (a: A) => B) => (g: (a: A) => B) => (a: A) => B
export function branch<A, B>(p: Predicate1<A>, f: (a: A) => B, g: (a: A) => B, a: A): B

export function cartesian(as: string): (bs: string) => [string]
export function cartesian(as: string, bs: string): [string]
export function cartesian<A, B>(as: A[]): (bs: B[]) => [[A, B]]
export function cartesian<A, B>(as: A[], bs: B[]): [[A, B]]

export function chunk(as: string): [string]
export function chunk<A>(as: A[]): [[A]]

export function chunkBy(p: Predicate2<string, string>): (as: string) => string
export function chunkBy(p: Predicate2<string, string>, as: string): string
export function chunkBy<A>(p: Predicate2<A, A>): (as: A[]) => A[]
export function chunkBy<A>(p: Predicate2<A, A>, as: A[]): A[]

export function dec(a: number): number

export function difference(as: string): (bs: string) => string
export function difference(as: string, bs: string): string
export function difference<A>(as: A[]): (bs: A[]) => [A]
export function difference<A>(as: A[], bs: A[]): [A]

export function differenceBy(p: Predicate2<string, string>): (as: string) => (bs: string) => string
export function differenceBy(p: Predicate2<string, string>, as: string, bs: string): string
export function differenceBy<A>(p: Predicate2<A, A>): (as: A[]) => (bs: A[]) => [A]
export function differenceBy<A>(p: Predicate2<A, A>, as: A[], bs: A[]): [A]

export function div(a: number): (b: number) => number
export function div(a: number, b: number): number

export function drop(n: number): (as: string) => string
export function drop(n: number, as: string): string
export function drop<A>(n: number): (as: A[]) => A[]
export function drop<A>(n: number, as: A[]): A[]

export function dropWhile(p: Predicate1<string>): (as: string) => string
export function dropWhile(p: Predicate1<string>, as: string): string
export function dropWhile<A>(p: Predicate1<A>): (as: A[]) => A[]
export function dropWhile<A>(p: Predicate1<A>, as: A[]): A[]

export function elem(a: string): (as: string) => boolean
export function elem(a: string, as: string): boolean
export function elem<A>(a: A): (as: A[]) => boolean
export function elem<A>(a: A, as: A[]): boolean

export function elemIndex(a: string): (as: string) => number
export function elemIndex(a: string, as: string): number
export function elemIndex<A>(a: A): (as: A[]) => number
export function elemIndex<A>(a: A, as: A[]): number

export function elemIndices(a: string): (as: string) => number[]
export function elemIndices(a: string, as: string): number[]
export function elemIndices<A>(a: A): (as: A[]) => number[]
export function elemIndices<A>(a: A, as: A[]): number[]

export function empty<A>(a: A[]): boolean
export function empty(a: string): boolean

export function endsWith(as: string): (bs: string) => boolean
export function endsWith(as: string, bs: string): boolean
export function endsWith<A>(as: A[]): (bs: A[]) => boolean
export function endsWith<A>(as: A[], bs: A[]): boolean

export function eq<A>(a: A): (b: A) => boolean
export function eq<A>(a: A, b: A): boolean

export function eqBy<A>(f: Function1<A, A>): (a: A) => (b: A) => boolean
export function eqBy<A>(f: Function1<A, A>, a: A, b: A): boolean

export function even(a: number): boolean

export function filter(p: Predicate1<string>): (as: string) => string
export function filter(p: Predicate1<string>, as: string): string
export function filter<A>(p: Predicate1<A>): (as: A[]) => A[]
export function filter<A>(p: Predicate1<A>, as: A[]): A[]

export function find(p: Predicate1<string>): (as: string) => string
export function find(p: Predicate1<string>, as: string): string
export function find<A>(p: Predicate1<A>): (as: A[]) => A
export function find<A>(p: Predicate1<A>, as: A[]): A

export function findIndex(p: Predicate1<string>): (as: string) => number
export function findIndex(p: Predicate1<string>, as: string): number
export function findIndex<A>(p: Predicate1<A>): (as: A[]) => number
export function findIndex<A>(p: Predicate1<A>, as: A[]): number

export function findIndices(p: Predicate1<string>): (as: string) => number[]
export function findIndices(p: Predicate1<string>, as: string): number[]
export function findIndices<A>(p: Predicate1<A>): (as: A[]) => number[]
export function findIndices<A>(p: Predicate1<A>, as: A[]): number[]

export function flip<R, A, B>(f: Function2<A, B, R>): Function2<B, A, R>

export function fold<B>(f: Function2<B, string, B>): (init: B) => (as: string) => B[]
export function fold<B>(f: Function2<B, string, B>, init: B, as: string): B[]
export function fold<A, B>(f: Function2<B, A, B>): (init: B) => (as: A[]) => B[]
export function fold<A, B>(f: Function2<B, A, B>, init: B, as: A[]): B[]

export function foldRight<B>(f: Function2<B, string, B>): (init: B) => (as: string) => B[]
export function foldRight<B>(f: Function2<B, string, B>, init: B, as: string): B[]
export function foldRight<A, B>(f: Function2<B, A, B>): (init: B) => (as: A[]) => B[]
export function foldRight<A, B>(f: Function2<B, A, B>, init: B, as: A[]): B[]

export function get<T, K extends keyof T>(k: K): (o: T) => any
export function get<T, K extends keyof T>(k: K, o: T): any

export function gt(a: number): (b: number) => boolean
export function gt(a: number, b: number): boolean

export function gte(a: number): (b: number) => boolean
export function gte(a: number, b: number): boolean

export function groupBy<A, K extends keyof A>(key: K, as: A[]): { [k: string]: [A] }
export function groupBy<A, B>(f: Function1<A, B>, as: A[]): { [k: string]: [A] }

export function has<T, K extends keyof T>(k: K): (o: T) => boolean
export function has<T, K extends keyof T>(k: K, o: T): boolean

export function head<A>(a: A[]): A
export function head(a: string): string

export function id<A>(a: A): A

export function inc(a: number): number

export function init(a: string): string
export function init<A>(a: A[]): A

export function inits(as: string): [string]
export function inits<A>(as: A[]): [[A]]

export function intersect(as: string): (bs: string) => string
export function intersect(as: string, bs: string): string
export function intersect<A>(as: A[]): (bs: A[]) => [A]
export function intersect<A>(as: A[], bs: A[]): [A]

export function intersectBy(p: Predicate2<string, string>): (as: string) => (bs: string) => string
export function intersectBy(p: Predicate2<string, string>, as: string, bs: string): string
export function intersectBy<A>(p: Predicate2<A, A>): (as: A[]) => (bs: A[]) => [A]
export function intersectBy<A>(p: Predicate2<A, A>, as: A[], bs: A[]): [A]

export function intersperse(a: string): (as: string) => string
export function intersperse(a: string, as: string): string
export function intersperse<A>(a: A): (as: A[]) => A[]
export function intersperse<A>(a: A, as: A[]): A[]

export function isInfixOf(as: string): (bs: string) => boolean
export function isInfixOf(as: string, bs: string): boolean
export function isInfixOf<A>(as: A[]): (bs: A[]) => boolean
export function isInfixOf<A>(as: A[], bs: A[]): boolean

export function isPrefixOf(as: string): (bs: string) => boolean
export function isPrefixOf(as: string, bs: string): boolean
export function isPrefixOf<A>(as: A[]): (bs: A[]) => boolean
export function isPrefixOf<A>(as: A[], bs: A[]): boolean

export function isSuffixOf(as: string): (bs: string) => boolean
export function isSuffixOf(as: string, bs: string): boolean
export function isSuffixOf<A>(as: A[]): (bs: A[]) => boolean
export function isSuffixOf<A>(as: A[], bs: A[]): boolean

export function keys(o: { [k: string]: any }): string[]

export function last(a: string): string
export function last<A>(a: A[]): A

export function length(a: string): number
export function length(a: any[]): number

export function lt(a: number): (b: number) => boolean
export function lt(a: number, b: number): boolean

export function lte(a: number): (b: number) => boolean
export function lte(a: number, b: number): boolean

export function map<B>(f: Function1<string, B>): (as: string) => B[]
export function map<B>(f: Function1<string, B>, as: string): B[]
export function map<A, B>(f: Function1<A, B>): (as: A[]) => B[]
export function map<A, B>(f: Function1<A, B>, as: A[]): B[]

export function max(a: number): (b: number) => number
export function max(a: number, b: number): number

export function maximum(as: string): string
export function maximum(as: number[]): number

export function maximumBy(c: Function2<string, string, number>): (as: string) => string
export function maximumBy(c: Function2<string, string, number>, as: string): string
export function maximumBy<A>(c: Function2<A, A, number>): (as: A[]) => A[]
export function maximumBy<A>(c: Function2<A, A, number>, as: A[]): A[]

export function min(a: number): (b: number) => number
export function min(a: number, b: number): number

export function minimum(as: string): string
export function minimum(as: number[]): number

export function minimumBy(c: Function2<string, string, number>): (as: string) => string
export function minimumBy(c: Function2<string, string, number>, as: string): string
export function minimumBy<A>(c: Function2<A, A, number>): (as: A[]) => A[]
export function minimumBy<A>(c: Function2<A, A, number>, as: A[]): A[]

export function mod(a: number): (b: number) => number
export function mod(a: number, b: number): number

export function mul(a: number): (b: number) => number
export function mul(a: number, b: number): number

export function negate(a: number): number

export function neq<A>(a: A): (b: A) => boolean
export function neq<A>(a: A, b: A): boolean

export function not(a: boolean): boolean

export function nub<A>(as: string): string[]
export function nub<A>(as: A[]): A[]

export function nubBy(p: Predicate1<string>): (as: string) => string[]
export function nubBy(p: Predicate1<string>, as: string): string[]
export function nubBy<A>(p: Predicate1<A>): (as: A[]) => A[]
export function nubBy<A>(p: Predicate1<A>, as: A[]): A[]

export function odd(a: number): boolean

export function omit<T, K extends keyof T>(k: K[]): (o: T) => Partial<T>
export function omit<T, K extends keyof T>(k: K[], o: T): Partial<T>

export function or(a: boolean): (b: boolean) => boolean
export function or(a: boolean, b: boolean): boolean

export function pair<A, B>(a: A): (b: B) => [A, B]
export function pair<A, B>(a: A, b: B): [A, B]

export function pairs<A>(o: { [k: string]: A }): [string, A][]

export function partition(p: Predicate1<string>): (as: string) => [string]
export function partition(p: Predicate1<string>, as: string): [string]
export function partition<A>(p: Predicate1<A>): (as: A[]) => [[A]]
export function partition<A>(p: Predicate1<A>, as: A[]): [[A]]

export function permutations(as: string): [string]
export function permutations<A>(as: A[]): [[A]]

export function pick<T, K extends keyof T>(ks: K[], o: T): T
export function pick<T, K extends keyof T>(ks: K[]): (o: T) => T

export function pipe<A, B>(f0: Function1<A, B>): (a: A) => B
export function pipe<A, B, C>(f0: Function1<A, B>, f1: Function1<A, B>): (a: A) => C
export function pipe<A, B, C, D>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>): (a: A) => D
export function pipe<A, B, C, D, E>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>): (a: A) => E
export function pipe<A, B, C, D, E, F>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>, f4: Function1<E, F>): (a: A) => F
export function pipe<A, B, C, D, E, F, G>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>, f4: Function1<E, F>, f5: Function1<F, G>): (a: A) => G
export function pipe<A, B, C, D, E, F, G, H>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>, f4: Function1<E, F>, f5: Function1<F, G>, f6: Function1<G, H>): (a: A) => H
export function pipe<A, B, C, D, E, F, G, H, I>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>, f4: Function1<E, F>, f5: Function1<F, G>, f6: Function1<G, H>, f7: Function1<H, I>): (a: A) => I
export function pipe<A, B, C, D, E, F, G, H, I, J>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>, f4: Function1<E, F>, f5: Function1<F, G>, f6: Function1<G, H>, f7: Function1<H, I>, f8: Function1<I, J>): (a: A) => J
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(f0: Function1<A, B>, f1: Function1<B, C>, f2: Function1<C, D>, f3: Function1<D, E>, f4: Function1<E, F>, f5: Function1<F, G>, f6: Function1<G, H>, f7: Function1<H, I>, f8: Function1<I, J>, f9: Function1<J, K>): (a: A) => K

export function prepend(a: string): (as: string) => string
export function prepend(a: string, as: string): string
export function prepend<A>(a: A): (as: A[]) => A[]
export function prepend<A>(a: A, as: A[]): A[]

export function product(as: number[]): number

export function randomFloat(): number

export function randomInt(): number

export function range(a: number): (b: number) => number[]
export function range(a: number, b: number): number[]

export function remove(a: string): (as: string) => string
export function remove(a: string, as: string): string
export function remove<A>(a: A): (as: A[]) => A[]
export function remove<A>(a: A, as: A[]): A[]

export function removeBy<A>(p: Predicate2<string, string>): (a: A) => (as: string) => string
export function removeBy<A>(p: Predicate2<string, string>, a: A, as: string): string
export function removeBy<A>(p: Predicate2<A, A>): (a: A) => (as: A[]) => A[]
export function removeBy<A>(p: Predicate2<A, A>, a: A, as: A[]): A[]

export function replace(a: string): (b: string) => (as: string) => string
export function replace(a: string, b: string, as: string): string
export function replace(a: RegExp): (b: string) => (as: string) => string
export function replace(a: RegExp, b: string, as: string): string

export function replicate(n: number): (a: string) => string
export function replicate(n: number, a: string): string
export function replicate<A>(n: number): (a: A) => A[]
export function replicate<A>(n: number, a: A): A[]

export function reverse(a: string): string
export function reverse<A>(a: A): A[]

export function sample(n: number): (as: string) => string
export function sample(n: number, as: string): string
export function sample<A>(n: number): (as: A[]) => A[]
export function sample<A>(n: number, as: A[]): A[]

export function scan<B>(f: Function2<B, string, B>): (init: B) => (as: string) => B[]
export function scan<B>(f: Function2<B, string, B>, init: B, as: string): B[]
export function scan<A, B>(f: Function2<B, A, B>): (init: B) => (as: A[]) => B[]
export function scan<A, B>(f: Function2<B, A, B>, init: B, as: A[]): B[]

export function scanRight<B>(f: Function2<B, string, B>): (init: B) => (as: string) => B[]
export function scanRight<B>(f: Function2<B, string, B>, init: B, as: string): B[]
export function scanRight<A, B>(f: Function2<B, A, B>): (init: B) => (as: A[]) => B[]
export function scanRight<A, B>(f: Function2<B, A, B>, init: B, as: A[]): B[]

export function set<T, K extends keyof T>(k: K): (a: any) => (o: T) => T
export function set<T, K extends keyof T>(k: K, a: any, o: T): T

export function shuffle(as: string): string
export function shuffle<A>(as: A[]): A[]

export function sort(as: string): string
export function sort<A>(as: A[]): A[]

export function sortBy(c: Function2<string, string, number>): (as: string) => string
export function sortBy(c: Function2<string, string, number>, as: string): string
export function sortBy<A>(c: Function2<A, A, number>): (as: A[]) => A[]
export function sortBy<A>(c: Function2<A, A, number>, as: A[]): A[]

export function span(p: Predicate1<string>): (as: string) => string
export function span(p: Predicate1<string>, as: string): string
export function span<A>(p: Predicate1<A>): (as: A[]) => A[]
export function span<A>(p: Predicate1<A>, as: A[]): A[]

export function splitAt(n: number): (as: string) => string
export function splitAt(n: number, as: string): string
export function splitAt<A>(n: number): (as: A[]) => A[]
export function splitAt<A>(n: number, as: A[]): A[]

export function startsWith(as: string): (bs: string) => boolean
export function startsWith(as: string, bs: string): boolean
export function startsWith<A>(as: A[]): (bs: A[]) => boolean
export function startsWith<A>(as: A[], bs: A[]): boolean

export function sub(a: number): (b: number) => number
export function sub(a: number, b: number): number

export function subsequences(as: string): [string]
export function subsequences<A>(as: A[]): [[A]]

export function sum(as: number[]): number

export function surround(a: string): (b: string) => (as: string) => string
export function surround(a: string, b: string, as: string): string
export function surround<A>(a: A): (b: A) => (as: A[]) => A[]
export function surround<A>(a: A, b: A, as: A[]): A[]

export function tail(a: string): string
export function tail<A>(a: A[]): A

export function tails(as: string): [string]
export function tails<A>(as: A[]): [[A]]

export function take(n: number): (as: string) => string
export function take(n: number, as: string): string
export function take<A>(n: number): (as: A[]) => A[]
export function take<A>(n: number, as: A[]): A[]

export function takeWhile(p: Predicate1<string>): (as: string) => string
export function takeWhile(p: Predicate1<string>, as: string): string
export function takeWhile<A>(p: Predicate1<A>): (as: A[]) => A[]
export function takeWhile<A>(p: Predicate1<A>, as: A[]): A[]

export function tap<A>(f: Function1<A, any>): (a: A) => A
export function tap<A>(f: Function1<A, any>, a: A): A

export function toLower(s: string): string

export function toUpper(s: string): string

export function union(as: string): (bs: string) => string
export function union(as: string, bs: string): string
export function union<A>(as: A[]): (bs: A[]) => [A]
export function union<A>(as: A[], bs: A[]): [A]

export function unionBy(p: Predicate2<string, string>): (as: string) => (bs: string) => string
export function unionBy(p: Predicate2<string, string>, as: string, bs: string): string
export function unionBy<A>(p: Predicate2<A, A>): (as: A[]) => (bs: A[]) => [A]
export function unionBy<A>(p: Predicate2<A, A>, as: A[], bs: A[]): [A]

export function update<T, K extends keyof T>(k: K): (f: Function1<any, T>) => (o: T) => T
export function update<T, K extends keyof T>(k: K, f: Function1<any, T>, o: T): T

export function values<A>(o: { [k: string]: A }): A[]

export function whereAll<A>(ps: Predicate1<A>[]): (a: A) => boolean
export function whereAll<A>(ps: Predicate1<A>[], a: A): boolean

export function whereAny<A>(ps: Predicate1<A>[]): (a: A) => boolean
export function whereAny<A>(ps: Predicate1<A>[], a: A): boolean

export function zip(a: string): (b: string) => string
export function zip(a: string, b: string): string
export function zip<A, B>(a: A[]): (b: B[]) => [A, B][]
export function zip<A, B>(a: A[], b: B[]): [A, B][]

export function zipWith<R>(f: Function2<string, string, R>): (a: string) => (b: string) => R[]
export function zipWith<R>(f: Function2<string, string, R>, a: string, b: string): R[]
export function zipWith<A, B, R>(f: Function2<A, B, R>): (a: A[]) => (b: B[]) => R[]
export function zipWith<A, B, R>(f: Function2<A, B, R>, a: A[], b: B[]): R[]
