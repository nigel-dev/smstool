require.config({

    baseUrl: "app/scripts",

    /* starting point for application */
    deps: ['backbone.marionette','backbone.marionette.handlebars', 'bootstrap', 'main'],


    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        prettycheckable: {
            deps: ['jquery'],
            exports: 'jQuery.fn.prettyCheckable'
        },
        
        'bootstrap/affix': { deps: ['jquery'], exports: '$.fn.affix' },
        'bootstrap/alert': { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap/button': { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap/carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap/collapse': { deps: ['jquery'], exports: '$.fn.collapse' },
        'bootstrap/dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap/modal': { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap/popover': { deps: ['jquery'], exports: '$.fn.popover' },
        'bootstrap/scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'},
        'bootstrap/tab': { deps: ['jquery'], exports: '$.fn.tab' },
        'bootstrap/tooltip': { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/transition': { deps: ['jquery'], exports: '$.support.transition' }
    },

    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        'jquery.cookie': '../bower_components/jquery.cookie/jquery.cookie',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.marionette.handlebars': '../bower_components/backbone.marionette.handlebars/backbone.marionette.handlebars',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

        /* alias the bootstrap js lib */
        bootstrap: '../bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs',
        
       
        loglevel: '../bower_components/loglevel/dist/loglevel',
        
       
    },

    hbs: {
        disableI18n: true
    }
});


