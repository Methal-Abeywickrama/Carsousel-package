export const handleSlideChange = (navbar, activeImage) => {
  navbar.querySelectorAll('.nav-item').forEach(navCircle => {
    navCircle.classList.remove('nav-item-active')
    if (navCircle.dataset.url == activeImage.src) {
      navCircle.classList.add('nav-item-active')
    }
  })
}