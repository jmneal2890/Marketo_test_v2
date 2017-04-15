$ = require('jquery');
slick_carousel = require('slick-carousel');
var button = require('./view_more.js');
var sidebar = require('./sidebar_scroll.js');
// var mobile = require('./mobile.js');

console.log('test 3');

$(document).ready(function(){

  //Main Body Re-order
  $(function (){
    $('.drop_down_menu').find('a').on('click', function(){
      let item = $(this).data('order');
      console.log(item);

      let displayOrder = [];
      let resources = $('.resources').css('order');
      let caseStudy = $('.case_study').css('order');
      let solutions = $('.solutions').css('order');
      let marketingU = $('.marketing_u').css('order');

      if (item == 't0') {
        console.log('default list');
        $('.story_container').fadeOut();
        $('.resources').css('order', '1');
        $('.case_study').css('order', '2');
        $('.story_container').fadeIn();
      } else if (item == 't1') {
        console.log('resources top list');
        $('.story_container').fadeOut();
        $('.resources').css('order', '5');
        $('.case_study').css('order', '2');
        $('.story_container').fadeIn();
      } else if (item == 't2') {
        console.log('case study top list');
        $('.story_container').fadeOut();
        $('.resources').css('order', '2');
        $('.case_study').css('order', '1');
        $('.story_container').fadeIn();
      } else if (item == 't3') {
        console.log('solutions top list');
        $('.story_container').fadeOut();
        $('.resources').css('order', '2');
        $('.case_study').css('order', '3');
        $('.solutions').css('order', '1');
        $('.story_container').fadeIn();
      } else if (item == 't4') {
        console.log('marking u top list');
        $('.story_container').fadeOut();
        $('.resources').css('order', '2');
        $('.case_study').css('order', '3');
        $('.solutions').css('order', '4');
        $('.marketing_u').css('order', '1');
        $('.story_container').fadeIn();
      }

    });

  });

  //slick slider
  $('.client_scroll').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});




console.log('this is the end');
