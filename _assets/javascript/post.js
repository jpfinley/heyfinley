$('.hideable').hide(0);

$(window).scroll(function() {
  if ($(this).scrollTop() > 110){
    $('nav.navbar-default').css({
      "background-color": "#FFFFFF",
      "border-color": "#F39C12"
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

$('#tail').click(function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 'slow');
  return false;
});
