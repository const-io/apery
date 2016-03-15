'use strict';

var zeta = require( 'math-riemann-zeta' );
var APERY = require( './../lib' );

console.log( 'ζ(3): %d', zeta( 3 ) );
// returns 1.2020569031595942

console.log( 'Apéry: %d', APERY );
// returns 1.2020569031595942
