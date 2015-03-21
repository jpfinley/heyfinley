// Hide everything by default on page load
$('.hideable').hide(0);

// When scroll amount is above threshold,
// turn on the nav and show all its elements.
// When scroll amount is above,
// hide the nav and its elements
$(window).scroll(function() {
  if ($(this).scrollTop() > 110){
    $('nav.navbar-default').css({
      "background-color": "#FFFFFF",
      "border-color": "#BDC3C7"
    });
    $('.hideable').show();
  }
  else{
    $('nav.navbar-default').css({
      "background-color": "transparent",
      "border-color": "transparent"
    });
    $('.hideable').hide();
  }
});

// SVG rollover effect. Nasty. Can't figure out
// how else to change two fills with a single :hover
$('.logo').hover(
  function() {
    $( '.logo-field'   ).css({ "fill": "#7F8C8D" }); // asbestos
    $( '.logo-initial' ).css({ "fill": "#FFFFFF" });
  }, function() {
    $( '.logo-field'   ).css({ "fill": "#ECF0F1" }); // clouds
    $( '.logo-initial' ).css({ "fill": "#E67E22" }); // carrot
  }
);

// Scroll to top in breadcrumb click
$('#tail').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 'slow');
  return false;
});
