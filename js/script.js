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

  $('.header__menu').click(function(event) {
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

    event.stopPropagation();

  });

  $(document).on('click', function(event) {
    if (!$(event.target).closest('.header__menu').length) {
      let img = $('.header__menu').find('img');
      if (img.attr('src') === './assets/images/close-menu.svg') {
          img.attr('src', './assets/images/menu.svg');
          $('.mobile-nav').removeClass('active');
          $('#overlay').addClass('hidden');
          $('.page').removeClass('no-scroll');
      }
    }
  });

});


$('.faq__list').accordion({
  active: true,
  collapsible: true,
  heightStyle: 'content',
});


const map = L.map('map').setView([55.755819, 37.617644], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.755819, 37.617644]).addTo(map)
    .bindPopup('55.755819, 37.617644')
    .openPopup();

