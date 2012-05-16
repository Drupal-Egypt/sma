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


/*
 
 var PostDeleteDialogView = Backbone.View.extend({
  initialize: function () {
    this.model.bind('change', this.render, this);
    this.template = _.template(tpl.get('post-delete-dialog'));
    $(this.el).html('<div data-role="content"></div>');
  },

  render: function (eventName) {
    $('div[data-role="content"]', this.el).html(this.template(this.model.toJSON())).trigger('create');
    return this;
  }
});

*/