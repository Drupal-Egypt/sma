$(document).bind("mobileinit", function () {
    console.log('mobileinit');
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;

    var iosDevice = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) ? true : false;

    $.extend($.mobile, {
      slideText :  (iosDevice) ? "slide" : "none",
      slideUpText :  (iosDevice) ? "slideup" : "none",
      defaultPageTransition:(iosDevice) ? "slide" : "none",
      defaultDialogTransition:(iosDevice) ? "slideup" : "none"
    });

    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').live('pagehide', function (event, ui) {
        $(event.currentTarget).remove();
    });
});
