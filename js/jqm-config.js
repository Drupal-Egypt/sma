// Filename: jqm-config.js

define(['jquery'],
function($) {

  $(document).on("mobileinit", function () {

    // Disable jQueryMobile routing.
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

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

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $(document).on("click", "a:not([data-bypass])", function (evt) {
        // Get the anchor href and protcol
        var href = $(this).attr("href");
        var protocol = this.protocol + "//";

        // Ensure the protocol is not part of URL, meaning it's relative.
        if (href && href.slice(0, protocol.length) !== protocol &&
            href.indexOf("javascript:") !== 0) {
            // Stop the default event to ensure the link will not cause a page
            // refresh.
            evt.preventDefault();

            // `Backbone.history.navigate` is sufficient for all Routers and will
            // trigger the correct events. The Router's internal `navigate` method
            // calls this anyways.
            //window.router.navigate('#post/list', { trigger: true });

            Backbone.history.navigate(href, {trigger: true});
          }
      });
  });

});
