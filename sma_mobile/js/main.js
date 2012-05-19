var AppRouter = Backbone.Router.extend({
  routes: {
    "": "mainRoute",
    "post/list": "postListRoute",
    "post/add": "postAddRoute",
    "post/details/:id": "postDetailsRoute",
    "post/delete/:id": "postDeleteRoute",
    "settings": "settingsRoute",
    "about": "aboutRoute",
  },
  
  mainRoute: function() {
    this.changePage(new MainPageView());
  },

  postListRoute: function() {
    var postList = new PostList();
    this.changePage(new PostListPageView({model: postList}));
    postList.fetch();
    setTimeout(function() {
      postList.fetch();
    }, 500);
  },
  
  postAddRoute: function() {
    this.changePage(new PostAddPageView());
  },

  postDetailsRoute: function(id) {
    var post = new Post({_id: id});
    this.changePage(new PostDetailsPageView({model: post}));
    post.fetch();
  },
  
  postDeleteRoute: function(id) {
    var post = new Post({_id: id});
    this.showDialog(new PostDeleteDialogView({model: post}));
    post.fetch();
  },
  
  settingsRoute: function() {
    this.changePage(new SettingsPageView());
  },

  aboutRoute: function() {
    this.changePage(new AboutPageView());
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
      // allowSamePageTransition: true,
      // reverse: false,
      changeHash: false,
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
                     'main-page', 'settings-page', 'about-page'
                    ], function() {
    app = new AppRouter();
    Backbone.history.start();
  });
});
