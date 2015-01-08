$(document).ready(function() {
  $('.cat').on('click', function() {
    var currentScore = +$('.clicks').text()
    $('.clicks').text(currentScore + 1)
  });
});
