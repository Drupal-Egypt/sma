var SettingsPageView = Backbone.View.extend({
  events: {
    "click #save-settings": "saveSettings",    
  },

  initialize: function () {
    this.template = _.template(tpl.get('settings-page'));
  },

  render: function (eventName) {
    $(this.el).html(this.template(appConfig));
    this.server_url = $("#server-url", this.el);
    return this;
  },
  
  saveSettings: function() {
    if (!this.server_url.val()) {
      return false;
    }

    appConfig.serverURL = this.server_url.val();
  }
});
