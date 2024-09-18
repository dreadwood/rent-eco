;(() => {
  const modal = document.querySelector('.js-modal-book')
  const form = document.querySelector('.js-modal-book-form')
  const submit = document.querySelector('.js-modal-book-submit')
  const overlay = document.querySelector('.js-overlay')

  const openBtns = document.querySelectorAll('.js-modal-book-open')
  const closeBtns = document.querySelectorAll('.js-modal-book-close')

  openBtns?.forEach((it) => it.addEventListener('click', openModal))
  closeBtns?.forEach((it) => it.addEventListener('click', closeModal))

  function openModal() {
    modal?.classList.add('show')
    overlay?.classList.add('show')
    document.body.classList.add('scroll-lock')
  }

  function closeModal() {
    modal?.classList.remove('show')
    overlay?.classList.remove('show')
    document.body.classList.remove('scroll-lock')
  }

  // openModal()
})()
