Apéry's Constant
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Apéry's][apery-constant] constant.

[Apéry's][apery-constant] is defined as

<div class="equation" align="center" data-raw-text="\zeta(3) = \sum_{n=1}^\infty \frac{1}{n^3} = \lim_{n\to\infty} \biggl(\frac{1}{1^3} + \frac{1}{2^3} + \cdots + \frac{1}{n^3}\biggr)" data-equation="eq:apery_constant">
	<img src="https://cdn.rawgit.com/const-io/apery/9e90f3e723426a7685beca207e363b7f8f5dc02e/docs/img/apery.svg" alt="Apéry's constant">
	<br>
</div>

where `ζ(s)` is the [Riemann zeta function][riemann-zeta].


## Installation

``` bash
$ npm install const-apery
```


## Usage

``` javascript
var APERY = require( 'const-apery' );
```

#### APERY

[Apéry's][apery-constant] constant.

``` javascript
APERY === 1.2020569031595942;
```


## Examples

``` javascript
var zeta = require( 'math-riemann-zeta' );
var APERY = require( 'const-apery' );

console.log( 'ζ(3): %d', zeta( 3 ) );
console.log( 'Apéry: %d', APERY );
// returns 1.2020569031595942
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-apery.svg
[npm-url]: https://npmjs.org/package/const-apery

[build-image]: http://img.shields.io/travis/const-io/apery/master.svg
[build-url]: https://travis-ci.org/const-io/apery

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/apery/master.svg
[coverage-url]: https://codecov.io/github/const-io/apery?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/apery.svg
[dependencies-url]: https://david-dm.org/const-io/apery

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/apery.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/apery

[github-issues-image]: http://img.shields.io/github/issues/const-io/apery.svg
[github-issues-url]: https://github.com/const-io/apery/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[apery-constant]: https://en.wikipedia.org/wiki/Ap%C3%A9ry%27s_constant
[compute-io]: https://github.com/compute-io
[riemann-zeta]: https://github.com/math-io/riemann-zeta
