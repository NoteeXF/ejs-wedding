document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slidera"); 
  const slides = document.querySelectorAll(".slidesr"); 
  let currentIndex = slides.length - 1;

  function slideTo(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slideTo(currentIndex);
  }

  setInterval(prevSlide, 5000); 
});
