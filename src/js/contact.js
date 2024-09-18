;(() => {
  const contactForm = document.querySelector('.js-contact-form')
  const contactBtn = document.querySelector('.js-contact-btn')

  if (!contactForm || !contactBtn) {
    return
  }

  const btnText = contactBtn?.textContent

  contactForm.addEventListener('submit', async (evt) => {
    evt.preventDefault()

    contactBtn.setAttribute('disabled', 'disabled')
    contactBtn.textContent = 'Sending...'

    const data = serializeForm(evt.target)

    try {
      const res = await window.utils.sendData(data, evt.target.action)

      if (res.status !== 200) {
        console.error('Error submitting contact form')
      }
    } catch (err) {
      console.error(err, 1)
    }

    contactBtn.removeAttribute('disabled')
    contactBtn.textContent = btnText

    evt.target.reset()
  })

  function serializeForm(form) {
    return new FormData(form).entries().reduce((acc, it) => {
      acc[it[0]] = it[1]
      return acc
    }, {})
  }
})()
