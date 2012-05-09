var PostListItemView = Backbone.View.extend({
  tagName: "li",
  
  initialize: function() {
    this.template = _.template(tpl.get('post-list-item'));
    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.remove, this);
  },
  
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },

  destroy: function() {
    $(this.el).unbind();
    $(this.el).remove();
  } 
});


var PostListView = Backbone.View.extend({
  tagName: "ul",

  initialize: function () {
    this.model.bind("reset", this.render, this);
    this.model.bind("add", this.append, this);
  },
 
  render: function () {
    _.each(this.model.models, this.append, this);
    return this;
  },
  
  append: function(post) {
    $(this.el).append(new PostListItemView({model: post}).render().el);
  }
})


var PostListPageView = Backbone.View.extend({
  initialize: function () {
    this.template = _.template(tpl.get('post-list-page'));
  },

  render: function (eventName) {
    $(this.el).html(this.template(this.model.toJSON()));
    this.postListView = new PostListView({el: $('ul', this.el), model: this.model});
    return this;
  }
});