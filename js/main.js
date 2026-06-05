import { renderHeader } from "./modules/header.js";
renderHeader();

const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const swiper = new Swiper(".testimonial .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
});
const slideWrapper = document.querySelector(".slidewrapper"),
  prevBtn = slideWrapper.querySelector(".prev"),
  nextBtn = slideWrapper.querySelector(".next");

nextBtn.addEventListener("click", () => {
  swiper.slideNext();
});
prevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
