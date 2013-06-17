// Filename: post.js

define(['backbone', 'underscore', 'app-config'],
function(Backbone, _, appConfig) {

  return Backbone.Model.extend({
    defaults: {
      title: "",
      body: "",
      created: new Date().toString(),
    },

    url: function() {
      if (_.isUndefined(this.attributes.id)) {
        return appConfig.baseURL + 'posts' + appConfig.addURL;
      }
      else {
        return appConfig.baseURL + 'posts/' + encodeURIComponent(this.attributes.id) + appConfig.addURL;
      }
    },
  });

});
