var Post = Backbone.Model.extend({
  defaults: {
    _id: null,
    title: "",
    body: "",
    created: "",
  },
  urlRoot: appConfig.serverURL + "post/"
});


var PostList = Backbone.Collection.extend({
    model: Post,
    url: appConfig.serverURL + "post/"
});
