// Filename: jqm-config.js

define(['jquery'],
function($) {

  $(document).on("mobileinit", function () {

    // Disable jQueryMobile routing.
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    //$.mobile.changePage.defaults.changeHash = false;

    // Setup transitions and effects.
    $.extend($.mobile, {
      slideText: "slide",
      slideUpText: "slideup",
      defaultPageTransition: "slide",
      defaultDialogTransition: "slideup"
    });

    // Remove page from the DOM when it's being replaced
    $('div[data-role="page"]').live('pagehide', function (event, ui) {
      $(event.currentTarget).remove();
    });
  });

});
