var Post = Backbone.Model.extend({
  defaults: {
    title: "",
    body: "",
    status: 1,
    _links: {
      type: {
        href: "http://localhost/drupal-rest/rest/type/node/article"
      }
    }
  },

  url: function() {
    if (_.isUndefined(this.attributes.id)) {
      return appConfig.baseURL + 'entity/node' + appConfig.addURL;
    }
    else {
      return appConfig.baseURL + 'entity/node/' + encodeURIComponent(this.attributes.id) + appConfig.addURL;
    }
  },
});

var PostList = Backbone.Collection.extend({
  model: Post,
  url: function() {
    return appConfig.baseURL + 'articles' + appConfig.addURL;
  }
});
