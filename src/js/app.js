// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import burgerMenu from './components/burger-menu';
import tabs from './components/tabs';
import swiperSlider from './components/slider';
import popups from './components/popup';
import Accordion from './components/accordion';

(($) => {
  // When DOM is ready
  $(() => {
    const accordions = new Accordion();
    burgerMenu.init();
    tabs.init();
    swiperSlider.init();
    popups.init();
  });
})(jQuery);
var scrolled;
window.onscroll = function () {
  scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    $('.header').addClass('active');
  }
  if (100 > scrolled) {
    $('.header').removeClass('active');
  }
};

var player1 = new Playerjs({ id: 'playerOne', file: '../assets/video/video2.mp4', poster: 'assets/images/1.jpg' });
// 
// const player1 = new Plyr('#playerOne');
var player = new Playerjs({ id: 'playerTwo', file: '../assets/video/video2.mp4', poster: 'assets/images/1.jpg' });

var player2 = new Playerjs({ id: 'playerThree', file: '../assets/video/video2.mp4', poster: 'assets/images/1.jpg' });

$('#nav li').click(function (e) {
  $('#nav li').removeClass('active');
  $(this).addClass('active');
  $('.burger.js-burger-open').click();
});

$('#nameOne').on('focus', function () {
  $('#popupOne').scrollTop(1000);
});

$('#nameTwo').on('focus', function () {
  $('#popupTwo').scrollTop(1000);
});

$('#telOne').on('focus', function () {
  $('#popupOne').scrollTop(1500);
});

$('#telTwo').on('focus', function () {
  $('#popupTwo').scrollTop(1500);
});
$(".open_full").on("click",function(){
  if ($(this).parent().children(".overflow-text").css('display') != 'inline'){
    $(this).parent().children(".overflow-text").css('display','inline');
     $(this).text("Скрыть");
  }
  else
  {
    $(this).parent().children(".overflow-text").css('display','none');
     $(this).text("Ещё");
  }
  })