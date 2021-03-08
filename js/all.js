$(document).ready(function(){
  $('.top a').click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:0},1000);
  });
  $('.side-line , .side-fb').hide();
});

$(window).scroll(function(){
    last=$("header").height()
    if($(window).scrollTop()>=last){
    $(".side-line , .side-fb").show(300)
    };
    line=$("body").height()-$(window).height()-120
    if($(window).scrollTop()>=line){
    $(".side-line , .side-fb").hide()
    };
    shide=$("header").height()-200
    if($(window).scrollTop()<=shide){
    $(".side-line , .side-fb").hide(300)
    };
    last2=$("div").height()
    if($(window).scrollTop()>=last2){
    $(".side-line , .side-fb").show()
    };
});


//swiper
var swiper = new Swiper('.swiper-container', {
  //自動播放
  autoplay: {
      delay: 4000,
  },
  //循環
  loop:true, 

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});