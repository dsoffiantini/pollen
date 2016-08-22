$(document).ready(function() {

  $('.work ul li').hover(function(){
    $('.work ul li').css('color', 'transparent');
    $(this).css('color', 'white');
    $('.work h3').css('color', 'transparent');
  }, function() {
    $('.work ul li').css('color', '#888');
    $(this).css('color', '#888');
    $('.work h3').css('color', '#888');
  })

})
