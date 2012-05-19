var PostDeleteDialogView = Backbone.View.extend({
  events: {
    "click #delete-post": "deletePost",
    "click #cancel": "cancel",    
  },

  initialize: function () {
    console.log('PostDeleteDialogView: initialize');
    this.template = _.template(tpl.get('post-delete-dialog'));
    console.log('PostDeleteDialogView: initialize end');
  },

  render: function (eventName) {
    console.log('PostDeleteDialogView: render');
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },

  deletePost: function() {
    this.model.destroy();
  },
  
  cancel: function() {
    window.history.back();
  }
});
