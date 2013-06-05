var MainPageView = Backbone.View.extend({
  initialize: function () {
    this.template = _.template(tpl.get('main-page'));
  },

  render: function (eventName) {
    $(this.el).html(this.template());
    return this;
  },
});
