//************************************ */
$(function () {
  // Toggle the + and - and slide toggle <ul> on click
  $(".footer-links-wrapper h3").click(function () {
    $(this).toggleClass("expanded").next("ul").slideToggle();
  });

  // Resize event to handle visibility based on screen size
  $(window)
    .resize(function () {
      if ($(window).width() >= 768) {
        $(".footer-links-wrapper h3").removeClass("expanded");
        $(".footer-links-wrapper ul").show();
      } else {
        $(".footer-links-wrapper ul").hide();
      }
    })
    .resize(); // Trigger resize to handle initial state
});
