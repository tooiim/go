$(document).ready(function() {
  $('#call-button').on('click', function() {
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
});