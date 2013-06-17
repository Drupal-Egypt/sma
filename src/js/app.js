// Author: Vadim Mirgorod <dealancer@gmail.com>
// Filename: app.js

// Configure Require.
require.config({

  // Define paths.
  paths: {
    jquery            : '../lib/jquery',
    'jquery.mobile'   : '../lib/jquery.mobile/jquery.mobile-1.1.0',
    underscore        : '../lib/underscore',
    backbone          : '../lib/backbone',
    'backbone-mongodb': '../lib/backbone-mongodb',
  },

  // Define dependencies.
  shim: {
    'backbone-mongodb': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    },
    'jquery.mobile': ['jquery','jqm-config'],
    'jqm-config': ['jquery'],
    'jquery': {
      exports: '$',
    }
  },

  // Make Backbone-mongodb load instead of Backbone.
  map: {
    '*': {
      'backbone': 'backbone-mongodb',
    },
    'backbone-mongodb': {
      'backbone': 'backbone'
    }
  },

});

// Start the main app logic.
requirejs([ 'app-config', 'router' ],
function (appConfig, Router) {
  $(document).ready(function () {
    window.router = new Router();
    Backbone.history.start({ pushState : false });
  });
});
