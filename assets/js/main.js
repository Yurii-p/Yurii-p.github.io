(function($) {
  "use strict";

  $(window).on("load", function() {
    /* Page Loader active
    ========================================================*/
    $("#preloader").fadeOut();

    /* slicknav mobile menu active  */
    $(".mobile-menu").slicknav({
      prependTo: ".navbar-header",
      parentTag: "liner",
      allowParentLinks: true,
      duplicate: true,
      label: "",
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>'
    });

    /* ==========================================================================
    countdown timer
    ========================================================================== */
    jQuery("#clock").countdown("2017/10/29 19:00:00", function(event) {
      var $this = jQuery(this).html(
        event.strftime(
          "" +
            '<div class="time-entry days"><span>%-Y</span> Years</div> ' +
            '<div class="time-entry days"><span>%-m</span> Months</div> ' +
            '<div class="time-entry days"><span>%-n</span> Days</div> ' +
            '<div class="time-entry hours"><span>%H</span> Hours</div> ' +
            '<div class="time-entry minutes"><span>%M</span> Minutes</div> ' +
            '<div class="time-entry seconds"><span>%S</span> Seconds</div> '
        )
      );
    });
  });
})(jQuery);
