var Post = Backbone.Model.extend({
  defaults: {
    title: "",
    body: "",
    created: "",
  },
 
  url : function() {
    return 'http://localhost:9090/post' + (this.id ? '/' + this.id : '');
  }  
});

var Workspace = Backbone.Router.extend({
  routes: {
    "": "posts",
    "posts": "posts",
    "posts/:id": "post",
  },

  posts: function() {
    console.log("posts");

    /*var post = new Post({
      title: "Hey! This is mobile post!",
      body: "YAHAAAA!"
    });
   
    post.save();
    console.log(post);
    */
  },

  post: function(id) {
    console.log("post");
  }
});

$(document).ready(function () {
  app = new Workspace();
  Backbone.history.start();
});
