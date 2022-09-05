// Pick all of the images and layer them based on x-index
const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

// We want to track of two things
let currentSlide = 0;
let z = 1;

// when I click the slide area, change the slide based on x-index
slideArea.addEventListener("click", function () {
  currentSlide = currentSlide + 1;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  z = z + 1;

  // Remove the animation from the style for every image
  images.forEach((image) => {
    image.style.animation = "";
  });

  images[currentSlide].style.zIndex = z;
  images[currentSlide].style.animation = "fade 0.5s";
});

// When I put my mouse over the slide area,
// put all of the images in a rondom place

slideArea.addEventListener("mouseover", function () {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random() *5 )) - 50
    const y = 25 * (Math.floor(Math.random() *5 )) - 50

    image.style.transform = `translate(${x}px, ${y}px)`
  });
});

//When I move mouse away put the images back
slideArea.addEventListener("mouseout", function () {
    images.forEach(image => {
        image.style.transform = ""
    })
} )