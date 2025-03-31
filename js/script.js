$(document).ready(function() {

  $('.call-button').on('click', function() {
      $('#overlay').removeClass('hidden');
      $('#modal').removeClass('hidden');
      $('.page').addClass('no-scroll');

      let img = $('.header__menu').find('img');
      img.attr('src', './assets/images/menu.svg');
      $('.mobile-nav').removeClass('active');
  });

  $('#modal-close').on('click', function() {
      $('#overlay').addClass('hidden');
      $('#modal').addClass('hidden');
      $('.page').removeClass('no-scroll');
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
        $('#overlay').removeClass('hidden');
        $('.page').addClass('no-scroll');
    } else {
        img.attr('src', './assets/images/menu.svg');
        $('.mobile-nav').removeClass('active');
        $('#overlay').addClass('hidden');
        $('.page').removeClass('no-scroll');
    }

  });

});


