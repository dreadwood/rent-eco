;(() => {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.section-flag__swiper', {
      loop: true,
      speed: 5000,
      slidesPerView: 'auto',
      setWrapperSize: true,
      allowTouchMove: false,

      autoplay: {
        delay: 0,
        disableOnInteraction: false
      }
    })
  })
})()
