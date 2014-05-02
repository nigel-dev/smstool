(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/texts'
		],
		function( Texts ) {

			describe('Texts Collection', function () {

				it('should be an instance of Texts Collection', function () {
					var texts = new Texts();
					expect( texts ).to.be.an.instanceof( Texts );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );