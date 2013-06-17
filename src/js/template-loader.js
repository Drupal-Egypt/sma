// Filename: template-loader.js

define(['jquery', 'underscore'],
  function($, _) {

    // Create global variable within jQuery object.
    var tpl = {};

    $('script.template').each(function(index) {

      // Load template from DOM.
      tpl[$(this).attr('id')] = _.template($(this).html());

      // Remove template from DOM.
      $(this).remove();
    });

    return tpl;
  }
);
