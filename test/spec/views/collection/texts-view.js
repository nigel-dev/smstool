(function() {
	'use strict';

	var root = this;

	root.define([
		'views/collection/texts-view'
		],
		function( TextsView ) {

			describe('TextsView Collectionview', function () {

				it('should be an instance of TextsView Collectionview', function () {
					var texts-view = new TextsView();
					expect( texts-view ).to.be.an.instanceof( TextsView );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );