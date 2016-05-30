$(function(){
  var h = $('body').height();

  $('.cover-area').css('height',h);
  $('.contents').css('margin-top',h);

  $(window).scroll(function(){
    var scrollh = $(window).scrollTop();
    $('.container').css('margin-top',-scrollh);
    $('.cover-area').css('margin-top',-(scrollh/2));
    $('.contents').css('margin-top',h);
    console.log('text');
  });
})
