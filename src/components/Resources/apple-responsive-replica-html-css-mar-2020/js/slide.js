// // *********Toggle and image***********************
// $(document).ready(function () {
//   $("#toggleImages").click(function () {
//     $(".image-containerNew img").slideToggle(500); // Toggle visibility of all images with a sliding effect
//   });
// });

//*********Play and Pause an image*********** */
let slider1 = document.querySelector(".slider1");
let images = document.querySelectorAll(".slider-image1");
let playPauseBtn = document.getElementById("playPauseBtn");
let playIcon = document.getElementById("playIcon");
let pauseIcon = document.getElementById("pauseIcon");
let slideIndex = 0; // Start with the first image

//****new */

//********* */

// Function to move the slider to the right (next image)
function moveRight() {
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0; // Loop back to the first image
    //slideIndex = images.length - 1; // Loop back to the first image
  }
  slider1.style.transform = `translateX(-${slideIndex * 100}%)`; // Move the slider by 100% of the width
  updateSliderBar();
}

// Function to move the slider to the left (previous image)
function moveLeft() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1; // Loop back to the last image
    //slideIndex = 0; // Prevent going before the first image
  }
  slider1.style.transform = `translateX(-${slideIndex * 100}%)`; // Move the slider by 100% of the width
  updateSliderBar();
}

//************* */

//*********** */

// Click event listener for the left arrow
document.getElementById("leftArrow").addEventListener("click", () => {
  moveLeft();
});

// Click event listeners for the right arrows
document.getElementById("rightArrow1").addEventListener("click", () => {
  moveRight();
});

// Function to start the automatic sliding when play is clicked
function startSliding() {
  slideInterval = setInterval(moveRight, 2000); // Slide every 2 seconds (you can adjust this timing)
}

// Function to stop the automatic sliding when pause is clicked
function stopSliding() {
  clearInterval(slideInterval);
}

// Click event listener for the play/pause button
playPauseBtn.addEventListener("click", () => {
  if (playIcon.style.display === "none") {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    stopSliding();
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    startSliding();
  }
});

// Update the navigation slider bar to match the current image index
function updateSliderBar() {
  let sliderBar = document.getElementById("navigationSliderBar");
  let percentage = (slideIndex / (images.length - 1)) * 100;
  sliderBar.style.width = `${percentage}%`;
}

// Event listener for the normal navigation slider click
document
  .getElementById("navigationSlider")
  .addEventListener("click", (event) => {
    let sliderContainer = event.currentTarget;
    let clickPosition = event.offsetX;
    let clickPercentage = (clickPosition / sliderContainer.offsetWidth) * 100;
    slideIndex = Math.round((clickPercentage / 100) * (images.length - 1));
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateSliderBar();
  });

// // Event listener for the slider container to detect where the user clicks
sliderContainer.addEventListener("click", (event) => {
  let containerWidth = sliderContainer.offsetWidth; // Get the width of the slider container
  let clickPosition = event.clientX; // Get the X position of the click relative to the window

  if (clickPosition < containerWidth / 2) {
    // If the click is on the left half, move the slider to the left (previous image)
    moveLeft();
  } else {
    // If the click is on the right half, move the slider to the right (next image)
    moveRight();
  }
});
