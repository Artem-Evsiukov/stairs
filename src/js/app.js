// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import burgerMenu from './components/burger-menu';
import tabs from './components/tabs';
import swiperSlider from './components/slider';
import popups from './components/popup';
import popupsVideo from './components/popup-video';
import Accordion from './components/accordion';
import { inputmask } from './components/inputMask';
import sendForm from './components/send-form';

(($) => {
  // When DOM is ready
  $(() => {
    const accordions = new Accordion();
    burgerMenu.init();
    tabs.init();
    swiperSlider.init();
    popups.init();
    popupsVideo.init();
    inputmask();
    sendForm.init();
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

//
const plur_player = new Plyr('#player');
const plur_player1 = new Plyr('#player1');
const plur_player2 = new Plyr('#player2');
const plur_player3 = new Plyr('#player3');
const plur_player4 = new Plyr('#player4');
const plur_player5 = new Plyr('#player5');
const plur_playerSix = new Plyr('#player-6');
const plur_playerSeven = new Plyr('#player-7');
const playerOne = new Plyr('#playerOne');
const playerTwo = new Plyr('#playerTwo');
const player6 = new Plyr('#player6');
const player7 = new Plyr('#player7');
const player8 = new Plyr('#player8');
//

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

$('#quizName').on('focus', function () {
  $('#formQuiz').scrollTop(1500);
});

$('#quizTel').on('focus', function () {
  $('#formQuiz').scrollTop(1500);
});

$('.open_full').on('click', function () {
  if ($(this).parent().children('.overflow-text').css('display') != 'inline') {
    $(this).parent().children('.overflow-text').css('display', 'inline');
    $(this).text('????????????');
  } else {
    $(this).parent().children('.overflow-text').css('display', 'none');
    $(this).text('??????');
  }
});

$('.quiz__wrap').on('scroll', function () {
  if ($('#firstScreen').css('display') != 'none') {
    if ($('#firstScreen').height() + $('#firstScreen').offset().top - $('.quiz__btn').offset().top - 30 < 0) {
      $('.quiz__btn').addClass('blocked');
    } else {
      $('.quiz__btn').removeClass('blocked');
    }
  }
  if ($('#secondScreen').css('display') != 'none') {
    if ($('#secondScreen').height() + $('#secondScreen').offset().top - $('.quiz__btn').offset().top - 30 < 0) {
      $('.quiz__btn').addClass('blocked');
    } else {
      $('.quiz__btn').removeClass('blocked');
    }
  }
  if ($('#thirdScreen').css('display') != 'none') {
    if ($('#thirdScreen').height() + $('#thirdScreen').offset().top - $('.quiz__btn').offset().top - 30 < 0) {
      $('.quiz__btn').addClass('blocked');
    } else {
      $('.quiz__btn').removeClass('blocked');
    }
  }
  if ($('#fourthScreen').css('display') != 'none') {
    if ($('#fourthScreen').height() + $('#fourthScreen').offset().top - $('.quiz__btn').offset().top - 30 < 0) {
      $('.quiz__btn').addClass('blocked');
    } else {
      $('.quiz__btn').removeClass('blocked');
    }
  }
  if ($('#fifthScreen').css('display') != 'none') {
    if ($('#fifthScreen').height() + $('#fifthScreen').offset().top - $('.quiz__btn').offset().top - 30 < 0) {
      $('.quiz__btn').addClass('blocked');
    } else {
      $('.quiz__btn').removeClass('blocked');
    }
  }
});

$('#form__Three-popup_button').on('click', function () {
  $(this).parent().parent().removeClass('active');
  $(this).parent().parent().css('display', 'none');
  $(this).parent().parent().css('opacity', '0');
});
$('#form__Three-popup_button1').on('click', function () {
  $(this).parent().parent().removeClass('active');
  $(this).parent().parent().css('display', 'none');
  $(this).parent().parent().css('opacity', '0');
});

$('#form__Three-popup_button2').on('click', function () {
  $(this).parent().parent().removeClass('active');
  $(this).parent().parent().css('display', 'none');
  $(this).parent().parent().css('opacity', '0');
});

$('#works__btn').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});
$('#works__btn2').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  } else {
    $(this).addClass('active');
  }
});

$(function () {
  $('.js-popup').each(function () {
    $(this).on('click', function () {
      var msrc = $(this).data('src');
      $.when($('.popup--videoOne').find('video').attr('src', msrc), $('.popup--videoOne').fadeIn()).done(function () {
        $('.popup--videoOne').find('video').get(0).play([0]);
      });
      return false;
    });
  });
  $('.js-popup-close').on('click', function () {
    $.when($('.popup--videoOne').fadeOut()).done(function () {
      $('.popup--videoOne').find('video').attr('src', '');
    });
    return false;
  });
});

$(function () {
  $('.js-popup').each(function () {
    $(this).on('click', function () {
      var msrc = $(this).data('src');
      $.when($('.popup--videoOne').find('video').attr('src', msrc), $('.popup--videoOne').fadeIn()).done(function () {
        $('.popup--videoOne').find('video').get(0).play([0]);
      });
      return false;
    });
  });
  $('#form__Three-popup_button').on('click', function () {
    $.when($('.popup--videoOne').fadeOut()).done(function () {
      $('.popup--videoOne').find('video').attr('src', '');
    });
    return false;
  });
});
