document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slides");
    let currentIndex = 0;
  
    function slideTo(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      slideTo(currentIndex);
    }
  
    setInterval(nextSlide, 5000); // Change slide every 3 seconds
  });
  