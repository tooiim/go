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

});

new Swiper('.swiper', {
	loop: true,
  
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
});


const map = L.map('map').setView([55.723151, 37.565021], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.723151, 37.565021]).addTo(map)
    .bindPopup('г. Москва ул. Усачёва, 29 к3')
    .openPopup();


    const formTitle = $('.form__legend-title');
    $('.booking-form').submit(function (event) {
      event.preventDefault();
      
      $.ajax({
        url: 'https://postman-echo.com/post',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
          formTitle.text('Спасибо ваша заявка принята')
          $('.booking-form').slideUp(300);
        },
        error() {
          formTitle.text('Что то пошло не так попробуйте позже')
        }
      })
    });

    const modalTitle = $('.modal__title');
    $('.modal-form').submit(function (event) {
      event.preventDefault();
      
      $.ajax({
        url: 'https://postman-echo.com/post',
        type: 'POST',
        data: $(this).serialize(),
        success: function(data) {
          formTitle.text('Спасибо ваша заявка принята')
          $('.modal-form').slideUp(300);
        },
        error() {
          formTitle.text('Что то пошло не так попробуйте позже')
        }
      })
    });