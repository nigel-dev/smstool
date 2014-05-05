define([
	'backbone',
	'hbs!tmpl/item/text-view_tmpl'
],
function( Backbone, TextViewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a TextView ItemView");
            //console.log(this.model.get('body'));
		},
		
    	template: TextViewTmpl,
        
        templateHelpers: {
            
            getSentRecv: function () {
                if(this.date_sent == 0) {
                    return "Sent";
                } 
                else {
                    return "Recieved";
                }
            },
            getDate: function () {
                var date = new Date(this.date);
                return date.toString();
            }
                
        },
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
