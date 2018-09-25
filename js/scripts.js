var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();
/*darkSide.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/480623/vadar_breathing.mp3";

var lightSide = new Audio();
lightSide.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/480623/yoda_use_the_force.mp3";

var clickCount = 0;

$('.toggle-container').on('click', function(){
  $('.toggle-handle').toggleClass('toggle-handle-day');
  $('body').toggleClass('off');
  $('.toggle-container').toggleClass('toggle-container-day');
  $('.star').toggleClass('star-day');
  $('.crater').toggleClass('crater-day');
  $('.mini-cloud').toggleClass('cloud-day');
  if (clickCount === 0){
    clickCount++;
    darkSide.pause();
    lightSide.play();
    return darkSide.currentTime = 0;
  } else if (clickCount === 1){
    clickCount--;
    lightSide.pause();
    darkSide.play();
    return lightSide.currentTime = 0;
  }
});
