'use strict';

// MODULES //

var tape = require( 'tape' );
var APERY = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof APERY, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 1.2020569031595942 (float64)', function test( t ) {
	t.equal( APERY, 1.2020569031595942, 'returns 1.2020569031595942' );
	t.end();
});
