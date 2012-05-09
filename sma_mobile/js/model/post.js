var Post = Backbone.Model.extend({
  defaults: {
    _id: null,
    title: "",
    body: "",
    created: "",
  },
  urlRoot: "http://localhost:9090/post"
});


var PostList = Backbone.Collection.extend({
    model: Post,
    url: "http://localhost:9090/post"
});
