// Selector
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const sliderImg = document.querySelectorAll(".slider-img");

let currentIndex = 0;

// Function for Change Image
const updateImage = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};


// Next Image
const goNextImage = () => {
  currentIndex += 1;

  if (currentIndex > sliderImg.length - 1) {
    currentIndex = 0;
  }
  updateImage();
};

// Previoys Image
const goPreviousImage = () => {
  currentIndex -= 1;

  if (currentIndex < 0) {
    currentIndex = sliderImg.length - 1;
  }
  updateImage();
};

// Event Button
nextBtn.addEventListener("click", goNextImage);
prevBtn.addEventListener("click", goPreviousImage);

// Change Slider Image Every 3 Seccond Automaticly
setInterval(goNextImage, 3000);
