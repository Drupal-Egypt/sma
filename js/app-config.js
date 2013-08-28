// Enable cross site scripting
jQuery.support.cors = true;

// Disable ajax cache
jQuery.ajaxSetup({ cache: false });

// Add REST service URL
var appConfig = {
  baseURL: 'http://localhost/drupal-rest/',
  addURL: '',
  token: 'KzZD5jUyib4MmjTuRd6hZy34cW7GjcF-WnK-sbhRtFk'
}

// Add support of MongoDB Extended JSON

  var mixin = {

    // Convert MongoDB Extended JSON into regular one.
    parse: function(resp, options) {
      console.log(resp);
      var id = this.idAttribute;

      _.each(resp, function(value, key) {
        if (_.isString(key) && key.charAt(0) != '_') {
          if (_.isArray(value)) {
            resp[key == 'nid' ? id : key] = value[0].value;
          }
        }
      });

      delete resp.nid;

      return resp;
    },

    // Convert regular JSON into MongoDB extended one.
    toExtendedJSON: function() {
      var attrs = this.attributes;

      console.dir('toExtendedJSON()');

      var id = this.idAttribute;
      _.each(attrs, function(value, key) {
        if (_.isString(key) && key.charAt(0) != '_') {
          attrs[key == id ? 'nid' : key] = [{ 'value': value }];
        }
      });

      console.dir(attrs);

      return attrs;
    },

    // Substute toJSON method when performing synchronization.
    sync: function() {
      var toJSON = this.toJSON;
      this.toJSON = this.toExtendedJSON;

      var ret = Backbone.sync.apply(this, arguments);

      this.toJSON = toJSON;

      return ret;
    }
  }


_.extend(Backbone.Model.prototype, mixin);

var sync = Backbone.sync;
Backbone.sync = function(method, model, options) {
  options.beforeSend = function (xhr) {
    console.log(appConfig.token);
    xhr.setRequestHeader('Accept', 'application/hal+json');
    xhr.setRequestHeader('X-CSRF-Token', appConfig.token);
  };
  sync(method, model, options);
};