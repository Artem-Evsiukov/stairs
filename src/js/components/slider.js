const swiperSlider = (() => {
  const tabSwiper = new Swiper('.js-tab-slider', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 1000,
    autoplay: true,
    centerInsufficientSlides: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const tabSwiperTwo = new Swiper('.js-tab-sliderTwo', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 1000,
    autoplay: true,
    centerInsufficientSlides: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const tabSwiperThree = new Swiper('.js-tab-sliderThree', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 1000,
    autoplay: true,
    centerInsufficientSlides: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const tabSwiperFour = new Swiper('.js-tab-sliderFour', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 1000,
    autoplay: true,
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  /////

  const videoSwiper = new Swiper('.js-video-slider', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-video-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-video-button-next',
      prevEl: '.swiper-video-button-prev',
    },
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
