;(() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')

    const swiper = new Swiper('.section-reviews__swiper', {
      spaceBetween: 8,
      slidesPerView: 'auto',
      setWrapperSize: true,

      navigation: {
        nextEl: '.section-reviews__btn--next',
        prevEl: '.section-reviews__btn--prev'
      }
    })
  })
})()
