function imageSlider() {
  // Get the necessary elements
  const slides = document.querySelectorAll(".slider__slide");
  let currentIndex = 0;

  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }

  // Initial slide display
  showSlide(currentIndex);

  // Example: Next slide button
  const nextButton = document.getElementById("nextButton"); // Add your button ID
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  // Example: Previous slide button
  const prevButton = document.getElementById("prevButton"); // Add your button ID
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });
}
imageSlider()
