var Post = Backbone.Model.extend({
  defaults: {
    _id: null,
    title: "",
    body: "",
    created: "",
  },

  idAttribute: "_id",
  url: function() {
    if (_.isUndefined(this.id)) {
      return appConfig.baseURL + 'invoices' + appConfig.addURL;
    }
    else {
      return appConfig.baseURL + 'invoices/' + encodeURIComponent(this.id) + appConfig.addURL;
    }
  },
});


var PostList = Backbone.Collection.extend({
  model: Post,
  url: function() {
    return appConfig.baseURL + 'invoices' + appConfig.addURL;
  }
});
