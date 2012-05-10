var PostAddPageView = Backbone.View.extend({
  events: {
    "click #add-post": "addPost",    
  },

  initialize: function () {
    this.template = _.template(tpl.get('post-add-page'));
  },

  render: function (eventName) {
    $(this.el).html(this.template());
    this.title = $("#post-title", this.el);
    this.body = $("#post-body", this.el);
    return this;
  },
  
  addPost: function() {
    console.log('title: ' + this.title.val());
    console.log('body: ' + this.body.val());
    if (!this.title.val() || !this.body.val()) {
      return false;
    }
    
    var post = new Post({
      title: this.title.val(),
      body: this.body.val(),
    });
    post.save();
  }
});