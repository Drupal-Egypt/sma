// Filename: about-page.js

define(['jquery', 'backbone', 'template-loader'],
  function($, Backbone, tpl) {
    return Backbone.View.extend({
      initialize: function () {
        this.template = tpl['about-page'];
      },

      render: function (eventName) {
        $(this.el).html(this.template());
        return this;
      },
    });
  }
);
