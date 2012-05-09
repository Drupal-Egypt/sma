var PostDetailsView = Backbone.View.extend({  
  initialize: function() {
    this.model.bind('change', this.render, this);
    this.template = _.template(tpl.get('post-details'));
  },
  
  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
});


var PostDetailsPageView = Backbone.View.extend({
  initialize: function () {
    this.template = _.template(tpl.get('post-details-page'));
  },

  render: function (eventName) {
    $(this.el).html(this.template(this.model.toJSON()));
    this.postDetailsView = new PostDetailsView({el: $('[data-role="content"]', this.el), model: this.model});
    return this;
  }
});