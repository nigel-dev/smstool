define([
	'backbone',
    'communicator',
	'hbs!tmpl/layout/search_tmpl',
    'views/collection/texts-view',
    'bootstrap/transition',
    'bootstrap/collapse'
],
function( Backbone, Comm, SearchTmpl, Results  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Search Layout");
		},
		
    	template: SearchTmpl,
    	

    	/* Layout sub regions */
    	regions: {
            results: "#results"
        },

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click #search-button': 'search'
        },

		/* on render callback */
		onRender: function() {
            this.results.show(new Results());
        },
        
        search: function(){
            var parms = $("#phone-number").val();
            Comm.mediator.trigger("searchForm:search", parms);
        }
	});

});
