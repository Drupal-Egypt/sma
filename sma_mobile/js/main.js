var AppRouter = Backbone.Router.extend({
  routes: {
    "": "postList",
    "post/list": "postList",
    "post/add": "postAdd",
    "post/details/:id": "postDetails",
    "post/delete/:id": "postDelete",
    "settings": "settings",
  },

  postList: function() {
    var postList = new PostList();
    this.changePage(new PostListPageView({model: postList}));
    postList.fetch();
  },
  
  postAdd: function() {
    this.changePage(new PostAddPageView());
  },

  postDetails: function(id) {
    var post = new Post({id: id});
    this.changePage(new PostDetailsPageView({model: post}));
    post.fetch();
  },
  
  postDelete: function(id) {
    var post = new Post({id: id});
    this.showDialog(new PostDeleteDialogView({model: post}));
    post.fetch();
  },
  
  settings: function() {
    this.changePage(new SettingsPageView());
  },

  changePage: function (page) {
    $(page.el).attr('data-role', 'page');
    page.render();
    $('body').append($(page.el));
    $.mobile.changePage($(page.el), {
      changeHash: false,
      transition: this.historyCount++ ? $.mobile.defaultPageTransition : 'none',
    });
  },
  
  showDialog: function(page) {
    $(page.el).attr('data-role', 'dialog');
    page.render();
    $('body').append($(page.el));
    $.mobile.changePage($(page.el), {
      allowSamePageTransition: true,
      changeHash: false,
      reverse: false,
      role: 'dialog',
      transition: this.historyCount++ ? $.mobile.defaultDialogTransition : 'none',
    });
  },

  historyCount: 0,
});

$(document).ready(function () {
  tpl.loadTemplates([
                     'post-list-item', 'post-list-page', 'post-details',
                     'post-details-page', 'post-add-page', 'post-delete-dialog',
                     'settings-page'
                    ], function() {
    app = new AppRouter();
    Backbone.history.start();
  });
});
