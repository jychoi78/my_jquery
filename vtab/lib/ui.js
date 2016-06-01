$(function(){
  $('.tab > li > a').click(function(e){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);

    var scope = event.currentTarget;
    $(scope).parent().addClass('on');
    $('.tab > li').not($(scope).parent()).removeClass();
  });

  $(window).scroll(function(){
    var wTop = $('body').scrollTop();

    var tab1 = $('#tab1-area').height(); //529
    var tab2 = $('#tab2-area').height(); //437
    var tab3 = $('#tab3-area').height(); //344
    var tab4 = $('#tab4-area').height(); //253
    var tab5 = $('#tab5-area').height(); //161

    /*if (tab1 > wTop) {
      console.log('section-1');
    } else if (tab1+tab2 > wTop) {
      console.log('section-2');
    } else if (tab1+tab2+tab3 > wTop) {
      console.log('section-3');
    } else if (tab1+tab2+tab3+tab4 > wTop) {
      console.log('section-4');
    } else if (tab1+tab2+tab3+tab4+tab5 > wTop) {
      console.log('section-5');
    }*/

    //console.log(wTop);

    /*if($(window).scrollTop() + $(window).height() == $(document).height()) {
      alert("bottom!");
    }*/

    $
  })

})
/*$(function(){
  var offset1 = $('.type1').position().top; //0
  var offset2 = $('.type2').position().top; //370
  var offset3 = $('.type3').position().top; //740
  var offset4 = $('.type4').position().top; //1100
  var offset5 = $('.type5').position().top; //1480

  $(window).scroll(function(){
    var wTop = $('body').scrollTop();

    if (offset1 < wTop && offset2 > wTop) {
      console.log('section-1')
    }
    else if (offset2 < wTop && offset3 > wTop) {
      console.log('section-2')
    }
    else if (offset3 < wTop && offset4 > wTop) {
      console.log('section-3')
    }
    else if (offset4 < wTop && offset5 > wTop) {
      console.log('section-4')
    }
    else if (offset5 < wTop) {
      console.log('section-5')
    }

    console.log(wTop);
  })
})*/
