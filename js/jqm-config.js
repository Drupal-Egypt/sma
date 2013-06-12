$(document).bind("mobileinit", function () {
  $.mobile.ajaxEnabled = false;
  $.mobile.linkBindingEnabled = false;
  $.mobile.hashListeningEnabled = false;
  $.mobile.pushStateEnabled = false;

  // var transitions = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) ? true : false;
  transitions = true;

  $.extend($.mobile, {
    slideText :  (transitions) ? "slide" : "none",
    slideUpText :  (transitions) ? "slideup" : "none",
    defaultPageTransition:(transitions) ? "slide" : "none",
    defaultDialogTransition:(transitions) ? "slideup" : "none"
  });

  // Remove page from DOM when it's being replaced
  $('div[data-role="page"]').live('pagehide', function (event, ui) {
      $(event.currentTarget).remove();
  });
});
