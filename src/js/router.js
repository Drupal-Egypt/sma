// Filename: router.js

define([
  'jquery',
  'jquery.mobile',
  'backbone',
  'model/post',
  'collection/post',
  'view/about-page',
  'view/main-page',
  'view/post-add-page',
  'view/post-delete-dialog',
  'view/post-details-page',
  'view/post-list-page',
  'view/settings-page',
], function($, mobile, Backbone, PostModel, PostCollection, AboutPageView,
      MainPageView, PostAddPageView, PostDeleteDialogView, PostDetailsPageView,
      PostListPageView, SettingsPageView) {

  return Backbone.Router.extend({
    routes: {
      "": "main",
      "post/list": "postList",
      "post/add": "postAdd",
      "post/details/:id": "postDetails",
      "post/delete/:id": "postDelete",
      "settings": "settings",
      "about": "about",
    },

    main: function() {
      this.changePage(new MainPageView());
    },

    postList: function() {
      var postCollection = new PostCollection();
      var view = new PostListPageView({collection: postCollection})
      this.changePage(view);
      postCollection.fetch();
    },

    postAdd: function() {
      this.changePage(new PostAddPageView());
    },

    postDetails: function(id) {
      var post = new PostModel({id: id});
      this.changePage(new PostDetailsPageView({model: post}));
      post.fetch();
    },

    postDelete: function(id) {
      var post = new PostModel({id: id});
      this.showDialog(new PostDeleteDialogView({model: post}));
      post.fetch();
    },

    settings: function() {
      this.changePage(new SettingsPageView());
    },

    about: function() {
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
        allowSamePageTransition: true,
        reverse: false,
        changeHash: false,
        role: 'dialog',
        transition: this.historyCount++ ? $.mobile.defaultDialogTransition : 'none',
      });
    },

    historyCount: 0,
  });
});
