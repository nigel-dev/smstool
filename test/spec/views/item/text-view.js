(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/text-view'
		],
		function( TextView ) {

			describe('TextView Itemview', function () {

				it('should be an instance of TextView Itemview', function () {
					var text-view = new TextView();
					expect( text-view ).to.be.an.instanceof( TextView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );