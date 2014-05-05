define([
	'backbone',
    'communicator',
	'views/item/text-view',
    'collections/texts'
],
function( Backbone, Comm, TextView, TextsCol  ) {
    'use strict';
    
    var that;

	/* Return a ItemView class definition */
	return Backbone.Marionette.CollectionView.extend({

		initialize: function() {
			console.log("initialize a TextsView CollectionView");
            Comm.mediator.on("searchForm:search", this.onSearch);
            that = this;
		},
		
    	itemView: TextView,
        
        collection: new TextsCol(),
    	

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
            console.log("TEXTS VIEW: onRender()");
        },
        
        onDomRefresh: function() {
            console.log("TEXTS VIEW: onDomRefresh()");
        },
        
        onSearch: function(parms) {
            if(parms.length > 0) {
                $(".jumbotron").fadeOut();
                $.ajax({
                        url: '/search?phone=' + parms,
                        type: 'GET',
                        contentType: "application/json; charset=utf-8",
                        beforeSend: function () {
                           // $('#wait-loading').fadeIn('fast');
                        }
                    })
                        .done(function (data, status) {
                           // console.log(data);
                            that.collection.reset(data);
//                            morePages = (page * cardLimit) < data.total;
//                            Comm.mediator.trigger("sortForm:show", data.total); //Pass total num results
//                            $('#wait-loading').fadeOut('fast');
                        });
            }
        }
	});

});
