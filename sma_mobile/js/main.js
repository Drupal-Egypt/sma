var AppRouter = Backbone.Router.extend({
  routes: {
    "": "posts",
    "posts": "posts",
    "posts/:id": "post",
  },

  posts: function() {
    this.postList = new PostList();
    this.changePage(new PostListPageView({model: this.postList}));
    this.postList.fetch();
  },

  post: function(id) {
    this.post = new Post({id: id});
    this.changePage(new PostDetailsPageView({model: this.post}));
    this.post.fetch();
  },

  changePage: function (page) {
    $(page.el).attr('data-role', 'page');
    page.render();
    $('body').append($(page.el));
    var transition = $.mobile.defaultPageTransition;
    // We don't want to slide the first page
    if (this.firstPage) {
      transition = 'none';
        this.firstPage = false;
    }
    $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }
});

$(document).ready(function () {
  tpl.loadTemplates(['post-list-item', 'post-list-page', 'post-details', 'post-details-page'], function() {
    app = new AppRouter();
    Backbone.history.start();
  });
});


/*
  var post = new Post({
  title: "Hey! This is mobile post!",
    body: "YAHAAAA!"
  });
   
  post.save();
  console.log(post);
*/