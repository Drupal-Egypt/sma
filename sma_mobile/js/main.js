// Models

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

// Views

var PostView = Backbone.View.extend({
  tagName: "li",
  
  initialize: function() {
    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.remove, this);
  },
  
  render: function() {
    $(this.el).html(this.model.get('title'));
    return this;
  },

  destroy: function() {
    $(this.el).unbind();
    $(this.el).remove();
  } 
});

var PostListView = Backbone.View.extend({
  tagName: "ul",

  initialize:function () {
    this.model.bind("reset", this.render, this);
    this.model.bind("add", this.append, this);
  },
 
  render: function () {
    _.each(this.model.models, this.append, this);
    return this;
  },
  
  append: function(post) {
    $(this.el).append(new PostView({model: post}).render().el);
  }
})

// Router

var Workspace = Backbone.Router.extend({
  routes: {
    "": "posts",
    "posts": "posts",
    "posts/:id": "post",
  },

  posts: function() {
    this.postList = new PostList();
    this.postListView = new PostListView({model:this.postList});
    this.postList.fetch();
    $('body').html(this.postListView.render().el);
  },

  post: function(id) {
  }
});

$(document).ready(function () {
  app = new Workspace();
  Backbone.history.start();
});

/*
  var post = new Post({
  title: "Hey! This is mobile post!",
    body: "YAHAAAA!"
  });
   
  post.save();
  console.log(post);
*/