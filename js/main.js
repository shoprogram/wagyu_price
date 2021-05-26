$(function() {

  $('#page-top').click(function(){
    var speed = 500;
    var target = $('html');
    var position = target.offset().top;
    $('html').animate({scrollTop:position}, speed, 'swing');
  });

});