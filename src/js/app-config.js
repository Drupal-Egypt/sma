// Filename: app-config.js

define(['jquery', 'backbone'],
  function($, Backbone) {

    // Enable cross site scripting.
    $.support.cors = true;

    // Disable ajax cache.
    $.ajaxSetup({ cache: false });

    // Add support of MongoDB Extended JSON.
    _.extend(Backbone.Model.prototype, Backbone.MongoModel.mixin);

    // Return app configuration.
    return {
      baseURL: 'https://api.mongolab.com/api/1/databases/social-mobile-app/collections/',
      addURL: '?apiKey=yGobEjzhT76Pjo9RaOLGfA89xCJXegpl'
    }
  }
);
