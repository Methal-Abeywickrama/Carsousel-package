export const navigator = (slides, activeImage) => {
  const navigatorBar = document.createElement('div')
  navigatorBar.classList.add('navigator-bar')
  
  slides.forEach(slide => {
    const navCircle = document.createElement('div')
    navCircle.classList.add('nav-item')
    navigatorBar.appendChild(navCircle)

    // handle click
    navCircle.addEventListener('click', () =>  {
      activeImage.src = slide.src

      
      allNavCircles.forEach(circle => {
        circle.classList.remove('nav-item-active');
      });

      navCircle.classList.add('nav-item-active')
  })
  const allNavCircles = navigatorBar.querySelectorAll('.nav-item');

  allNavCircles[0].classList.add('nav-item-active')


  });
  return navigatorBar 
}