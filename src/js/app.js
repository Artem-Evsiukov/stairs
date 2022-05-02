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
    // inputmask.init();
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
$(function () {
  $('#escolta').click(function () {
    video.playVideo();
    //$("#video").playVideo();
    //$("#video").trigger('play');
    //$(".player").playVideo()
  });

  $('#pausa').click(function () {
    video.stopVideo();
    //$("#video").trigger('pause');
  });
});

var player = new Playerjs({ id: 'playerTwo', file: '../assets/video/video2.mp4', poster: 'assets/images/1.jpg' });

var player = new Playerjs({ id: 'playerOne', file: '../assets/video/video-block1.mp4', poster: 'assets/images/1.jpg' });
