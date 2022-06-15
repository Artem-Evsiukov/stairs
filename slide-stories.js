class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories('slide');
new SlideStories('slideTwo');
new SlideStories('slideThree');
new SlideStories('slideForth');
new SlideStories('slideFive');
new SlideStories('slideSix');
new SlideStories('slideSeven');
new SlideStories('slideEight');
new SlideStories('slideNine');
new SlideStories('slideTen');

new SlideStories('reviews-popup');
new SlideStories('reviews-popup-1');
new SlideStories('reviews-popup-2');
new SlideStories('reviews-popup-3');
new SlideStories('reviews-popup-4');

new SlideStories('tabs-3');
new SlideStories('tabs-4');
new SlideStories('tabs-5');
new SlideStories('tabs-6');
new SlideStories('tabs-7');
new SlideStories('tabs-8');

new SlideStories('forging-3');
new SlideStories('forging-4');
new SlideStories('forging-5');
new SlideStories('forging-6');
new SlideStories('forging-7');

new SlideStories('glass-3');
new SlideStories('glass-4');
new SlideStories('glass-5');
new SlideStories('glass-6');
new SlideStories('glass-7');

new SlideStories('screw-3');
new SlideStories('screw-4');

new SlideStories('steel-2');
new SlideStories('steel-3');

new SlideStories('slideGallery');
new SlideStories('slideGallery2');
new SlideStories('slideGallery3');
new SlideStories('slideGallery4');
new SlideStories('slideGallery5');
new SlideStories('slideGallery6');
new SlideStories('slideGallery7');
new SlideStories('slideGallery8');
new SlideStories('slideGallery9');
