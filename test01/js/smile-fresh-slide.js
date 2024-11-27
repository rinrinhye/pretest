const smileFreshSlide = new Swiper('.smile-fresh-slide', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  a11y: {
    prevSlideMessage: '이전 슬라이드',
    nextSlideMessage: '다음 슬라이드',
  },
  loop: true,
});
