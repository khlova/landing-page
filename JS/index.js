$(document).scroll(function(){
  if($(document).width() < 1024)
    return false;

  if($(document).scrollTop() > $(".full-page").height() / 2)
    $("header").addClass("fixed");
  else
    $("header").removeClass("fixed");
});


$(".up-btn").on("click", function(){
  $("html, body").animate({
    scrollTop:0
  }, 1500);
});

$("#show-menu").on("click", function(){
  $("#hidden-menu").animate({
    "right": 0
  }, 1000);
});

$("#hidden-menu .close").on("click", function(){
  $("#hidden-menu").animate({
    "right": -300
  }, 500);
});

$(document).ready(function(){
  $('#gallery_1').slick({
    dots: false,
    prevArrow:'<div" class="arrow-prev"><i class="far fa-hand-point-left"></i></div>',
    nextArrow:'<div" class="arrow-next"><i class="far fa-hand-point-right"></i></div>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function(){
  $('#gallery_2').slick({
    dots: false,
    prevArrow:'<div" class="arrow-prev"><i class="far fa-hand-point-left"></i></div>',
    nextArrow:'<div" class="arrow-next"><i class="far fa-hand-point-right"></i></div>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function(){
  $('#gallery_3').slick({
    dots: false,
    prevArrow:'<div" class="arrow-prev"><i class="far fa-hand-point-left"></i></div>',
    nextArrow:'<div" class="arrow-next"><i class="far fa-hand-point-right"></i></div>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(document).ready(function(){
  $('#gallery_4').slick({
    dots: false,
    prevArrow:'<div" class="arrow-prev"><i class="far fa-hand-point-left"></i></div>',
    nextArrow:'<div" class="arrow-next"><i class="far fa-hand-point-right"></i></div>',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});