const swiperSlider = (() => {
  const tabSwiper = new Swiper('.js-tab-slider', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    speed: 1000,
    autoplay: true,
    centerInsufficientSlides: false,
    observer: true,
    observeParents: true,
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
    observer: true,
    observeParents: true,
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
    observer: true,
    observeParents: true,
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
    observer: true,
    observeParents: true,
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

  /////

  const withdrawableSwiper = new Swiper('.js-withdrawable-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-withdrawable-pagination',
      type: 'bullets',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-video-button-next',
    //   prevEl: '.swiper-video-button-prev',
    // },
  });
  const reviewsSwiper = new Swiper('.js-reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    pagination: {
      el: '.swiper-reviews-pagination',
      type: 'bullets',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.swiper-video-button-next',
    //   prevEl: '.swiper-video-button-prev',
    // },
  });
  const reviewsImagesSwiper = new Swiper('.js-reviews-images-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    centerInsufficientSlides: true,
  });

  const init = () => {};

  return {
    init,
  };
})();

export default swiperSlider;
