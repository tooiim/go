$(document).ready(function() {
  $('.call-button').on('click', function() {
      $('#overlay').removeClass('hidden');
      $('#modal').removeClass('hidden');
  });

  $('#modal-close').on('click', function() {
      $('#overlay').addClass('hidden');
      $('#modal').addClass('hidden');
  });

  $('#overlay').on('click', function() {
      $('#overlay').addClass('hidden');
      $('#modal').addClass('hidden');
  });

  $('.header__menu').click(function() {
    let img = $(this).find('img');
    if (img.attr('src') === './assets/images/menu.svg') {
        img.attr('src', './assets/images/close-menu.svg');
        $('.mobile-nav').addClass('active'); 
    } else {
        img.attr('src', './assets/images/menu.svg');
        $('.mobile-nav').removeClass('active'); 
    }
});
});