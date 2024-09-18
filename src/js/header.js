;(() => {
  const headerLogo = document.querySelector('.js-header-logo')
  const headerBurder = document.querySelector('.js-header-burger')
  const headerMenu = document.querySelector('.js-header-menu')
  const headerClose = document.querySelector('.js-header-close')
  const overlay = document.querySelector('.js-overlay')
  const headerTel = document.querySelector('.js-header-tel')
  const headerContact = document.querySelector('.js-header-contact')

  const headerSocial = document.querySelectorAll('.js-header-social')
  const headerLinks = document.querySelectorAll('.js-header-link')

  headerBurder?.addEventListener('click', openMenu)
  headerClose?.addEventListener('click', closeMenu)

  headerTel?.addEventListener('click', closeMenu)
  headerContact?.addEventListener('click', closeMenu)

  headerLinks?.forEach((it) => it.addEventListener('click', closeMenu))
  headerSocial?.forEach((it) => it.addEventListener('click', closeMenu))

  function openMenu() {
    headerLogo?.classList.add('black')
    headerMenu?.classList.add('show')
    overlay?.classList.add('show')
    document.body.classList.add('scroll-lock')
  }

  function closeMenu() {
    headerLogo?.classList.remove('black')
    headerMenu?.classList.remove('show')
    overlay?.classList.remove('show')
    document.body.classList.remove('scroll-lock')
  }
})()
