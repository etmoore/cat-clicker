$(document).ready(function() {
  $('.cats').on('click','.cat-photo', function() {
    var currentScore = +$(this).siblings('.click-count').text()
    $(this).siblings('.click-count').text(currentScore + 1)
  });
});
