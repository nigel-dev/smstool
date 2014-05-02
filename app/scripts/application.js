define([
	'backbone',
	'communicator',
    'views/layout/search'
],

function( Backbone, Communicator, Search ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        mainLayout: "#main-layout"
    });

	/* Add initializers here */
	App.addInitializer( function () {
		App.mainLayout.show(new Search());
		Communicator.mediator.trigger("APP:START");
	});

	return App;
});
