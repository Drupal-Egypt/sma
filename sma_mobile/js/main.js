var AppRouter = Backbone.Router.extend({
  routes: {
    "": "postList",
    "post/list": "postList",
    "post/add": "postAdd",
    "post/details/:id": "postDetails",
    "settings": "settings",
  },

  postList: function() {
    this.postList = new PostList();
    this.changePage(new PostListPageView({model: this.postList}));
    this.postList.fetch();
  },

  postDetails: function(id) {
    this.post = new Post({id: id});
    this.changePage(new PostDetailsPageView({model: this.post}));
    this.post.fetch();
  },
  
  postAdd: function() {
    this.changePage(new PostAddPageView());
  },
  
  settings: function() {
    this.changePage(new SettingsPageView());
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
  tpl.loadTemplates([
                     'post-list-item', 'post-list-page', 'post-details',
                     'post-details-page', 'post-add-page', 'settings-page'
                    ], function() {
    app = new AppRouter();
    Backbone.history.start();
  });
});
