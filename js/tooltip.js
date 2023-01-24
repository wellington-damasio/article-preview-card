const tooltipToggles = document.querySelectorAll("[data-toggle='tooltip']")

Array.from(tooltipToggles).forEach(tooltipToggle => {
  tooltipToggle.addEventListener('click', () => {
    const screenWidth = document.documentElement.clientWidth

    if (screenWidth < 640) {
      const targetElement = document.querySelector('#mobile-tooltip')
      targetElement.classList.remove('c-tooltip-hidden')
      HideAnimation(targetElement, 500)
    }

    if (screenWidth > 640) {
      const targetElement = document.querySelector('#desktop-tooltip')
      targetElement.classList.remove('c-tooltip-hidden')
      HideAnimation(targetElement, 400)
    }
  })
})

const HideAnimation = (targetElement, timeOut) => {
  setTimeout(() => {
    targetElement.focus()
  }, timeOut)

  document.body.addEventListener('click', () => {
    setTimeout(() => {
      if (document.activeElement !== targetElement) {
        targetElement.classList.add('c-tooltip-hidden')
      }
    }, timeOut)
  })
}



