// Hide everything by default on page load
$('.hideable').hide(0);

// When scroll amount is above threshold,
// turn on the nav and show all its elements.
// When scroll amount is above,
// hide the nav and its elements
$(window).scroll(function() {
  if ($(this).scrollTop() > 110){
    $('nav.navbar-default').addClass('scrolled');
    $('.hideable').show();
  }
  else{
    $('nav.navbar-default').removeClass('scrolled');
    $('.hideable').hide();
  }
});

// SVG rollover effect. A bit nasty
// since SVG won't respond to addClass()
$('.logo').hover(
  function() {
    $( '.logo-field'   ).attr('class', 'logo-field hover');
    $( '.logo-initial' ).attr('class', 'logo-initial hover');
  }, function() {                             
    $( '.logo-field'   ).attr('class', 'logo-field');
    $( '.logo-initial' ).attr('class', 'logo-initial');
  }
);

// Scroll to top in breadcrumb click
$('#tail').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 'slow');
  return false;
});

// Lazy Loading
var layzr = new Layzr();
