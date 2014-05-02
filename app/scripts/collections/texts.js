define([
	'backbone',
	'models/text'
],
function( Backbone, Text ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Texts collection");
		},

		model: Text
		
	});
});
