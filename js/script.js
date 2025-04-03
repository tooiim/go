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

  $('.faq__list').accordion({
    active: true,
    collapsible: true,
    heightStyle: "content",
		icons: {
			header: 'accord-icon',
			activeHeader: 'accord-icon accord-icon--open',
		}
  });

//   $('.accord-icon').each(function(index) {
//     if ($(this).hasClass('accord-icon--open')) {
      
//         if (index % 2 === 0) { 
//             $(this).css('background-image', 'url("./../assets/images/faq-item-purple-close.svg")');
//         } else { 
//             $(this).css('background-image', 'url("./../assets/images/faq-item-white-active.svg")');
//         }
//     }
// });

});





const map = L.map('map').setView([55.723151, 37.565021], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.723151, 37.565021]).addTo(map)
    .bindPopup('г. Москва ул. Усачёва, 29 к3')
    .openPopup();

