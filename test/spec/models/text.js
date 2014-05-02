(function() {
	'use strict';

	var root = this;

	root.define([
		'models/text'
		],
		function( Text ) {

			describe('Text Model', function () {

				it('should be an instance of Text Model', function () {
					var text = new Text();
					expect( text ).to.be.an.instanceof( Text );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );