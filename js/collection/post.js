// Filename: post.js

define(['backbone', '../model/post', 'app-config'],
function(Backbone, PostModel, appConfig) {

  return Backbone.Collection.extend({
    model: PostModel,
    url: function() {
      return appConfig.baseURL + 'posts' + appConfig.addURL;
    }
  });

});
