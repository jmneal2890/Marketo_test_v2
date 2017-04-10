//sidebar scroll controller
var sidebar = $(function() {
    let topTrigger = $('.resources').offset().top * .75;
    let bottomTrigger = $('.solutions').offset().top;
    let scrollBottom = $(window).scrollTop() + $(window).height();
    console.log('scroll bottom = ' + scrollBottom);
    console.log('bottom trigger = ' + bottomTrigger);
    console.log('top trigger = ' + topTrigger);
    console.log('window height = ' + $(window).height());
    console.log('main body top = ' + $('.top_level_container').offset().top);
    console.log('main body bottom = ' + $('.top_level_container').height());

    $(window).scroll(function() {
      if($(window).scrollTop() > topTrigger) {
        console.log('stick top');
        $('.sidebar').addClass('fixed_scroll');
      } else {
        console.log('default');
        $('.sidebar').removeClass('fixed_scroll');
      }
    });

  });

  module.export = sidebar;
