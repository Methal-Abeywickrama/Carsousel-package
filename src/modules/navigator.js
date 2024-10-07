import { handleSlideChange } from "./navCircle";

export const navigator = (slides, activeImage) => {
  const navigatorBar = document.createElement('div')
  navigatorBar.classList.add('navigator-bar')
  
  slides.forEach(slide => {
    const navCircle = document.createElement('div')
    navCircle.classList.add('nav-item')
    navCircle.dataset.url = slide.src
    navigatorBar.appendChild(navCircle)

    // handle click
    navCircle.addEventListener('click', () =>  {
      activeImage.src = slide.src
      handleSlideChange(navigatorBar, slide.src)

      navCircle.classList.add('nav-item-active')
  })
  

  navigatorBar.querySelector('.nav-item').classList.add('nav-item-active')


  });
  return navigatorBar 
}