import "./styles.css";
import { navigator } from "./modules/navigator";
//Containes the relevant methods for creating a carousel
const carouselController = () => {
  const containers = document.querySelectorAll('.carousel-display')
  containers.forEach(container => {
    //selects all the images within a given carousel and initially hides it
    const slides = container.querySelectorAll(".carousel-image");
    slides.forEach((slide) => {
      slide.classList.add("hidden");
    });
    let position = 0
    const nextPostition = (num) => {
      const max = slides.length - 1
      return max === num ? 0 : num + 1
    }
    const previousPosition = (num) => {
      const min = slides.length;
      return num == 0 ? min - 1 : num - 1
    }
    // Iniitilise the active slide
    const activeSlide = document.createElement("div");
    activeSlide.classList.add("active-slide");
    const activeImage = document.createElement("img");

    activeImage.src = slides[0].src;
    activeImage.classList.add("active-image");
    const navbar = navigator(slides, activeImage)

    container.appendChild(activeSlide);
    container.appendChild(navbar)

    // Create the left and right overlays
    const leftOverlay = document.createElement("div");
    leftOverlay.classList.add("overlay", "left-overlay");

    const rightOverlay = document.createElement("div");
    rightOverlay.classList.add("overlay", "right-overlay");

    activeSlide.appendChild(leftOverlay);
    activeSlide.appendChild(activeImage);
    activeSlide.appendChild(rightOverlay);

    // Detecting and adding focus to left and right navigations
    rightOverlay.addEventListener("mouseover", () =>
      rightOverlay.classList.add("overlay-visible"),
    );
    leftOverlay.addEventListener("mouseover", () =>
      leftOverlay.classList.add("overlay-visible"),
    );
    rightOverlay.addEventListener("mouseout", () =>
      rightOverlay.classList.remove("overlay-visible"),
    );
    leftOverlay.addEventListener("mouseout", () =>
      leftOverlay.classList.remove("overlay-visible"),
    );

    // controlling left and right navigation
    leftOverlay.addEventListener('click', () => {
      console.log(position)
      position = previousPosition(position)
      activeImage.src = slides[position].src
    })
    rightOverlay.addEventListener('click', () => {
      console.log(position)
      position = nextPostition(position)
      console.log(position)
      activeImage.src = slides[position].src
    })
  })


}

carouselController()

