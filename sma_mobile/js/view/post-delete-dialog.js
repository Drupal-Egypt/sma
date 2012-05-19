var PostDeleteDialogView = Backbone.View.extend({
  events: {
    "click #delete-post": "deletePost",
    "click #cancel": "cancel",    
  },

  initialize: function () {
    this.template = _.template(tpl.get('post-delete-dialog'));
  },

  render: function (eventName) {
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
