var Post = Backbone.Model.extend({
  defaults: {
    _id: null,
    title: "",
    body: "",
    created: "",
  },
  idAttribute: "_id",
  urlRoot: function() {
    return appConfig.serverURL + "post/";
  }
});


var PostList = Backbone.Collection.extend({
    model: Post,
    url: function() {
      return appConfig.serverURL + "post/";
    }
});
