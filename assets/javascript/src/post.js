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
    // Append 'hover' class on ::hover
    $( '.logo-field'   ).attr('class', 'logo-field hover');
    $( '.logo-initial' ).attr('class', 'logo-initial hover');
  }, function() {
    // Remove 'hover' class after ::hover
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

// Visited links adapted from http://joelcalifa.com/blog/revisiting-visited
// For every page load, create a localStorage item with its path
localStorage.setItem('visited-'+window.location.pathname,true);

// Get the main set of post item links on the home page...
// (They are the ones with the 'visitable' class)
// If the post they to which they link matches a line item
// in localStorage then they are Visited.
// Add data-visited="true" to the link and let CSS sort it out.
$( ".visitable" ).each(function( index ) {
  if ( localStorage.getItem('visited-' + $( this ).attr('href')) ) {
    this.dataset.visited = true;
  }
});
