const swiperSlider = (() => {
  const tabSwiper = new Swiper('.js-tab-slider', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 800,
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const videoSwiper = new Swiper('.js-video-slider', {
    // slidesPerView: 2,
    // spaceBetween: 20,

    // speed: 800,
    // centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-video-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-video-button-prev',
      prevEl: '.swiper-video-button-next',
    },
    // breakpoints: {
    //   768: {
    //     spaceBetween: 40,
    //     slidesPerView: 3,
    //   },
    // },
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
