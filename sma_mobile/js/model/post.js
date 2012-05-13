var Post = Backbone.Model.extend({
  defaults: {
    _id: null,
    title: "",
    body: "",
    created: "",
  },
  urlRoot: function() {
    console.log(appConfig.serverURL);
    return appConfig.serverURL + "post/";
  }
});


var PostList = Backbone.Collection.extend({
    model: Post,
    url: function() {
      console.log(appConfig.serverURL);
      return appConfig.serverURL + "post/";
    }
});
