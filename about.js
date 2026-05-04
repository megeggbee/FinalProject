const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("night-mode");
  toggleBtn.textContent = body.classList.contains("night-mode")
    ? "Switch to Day Mode"
    : "Switch to Night Mode";
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
let index = 0;

function autoPlay() {
  index++;
  
  if (index >= slides.length) {
    index = 0;
  }
  
  // Calculate the scroll position based on image width
  const scrollAmount = slider.clientWidth * index;
  
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Change slide every 4 seconds
let slideInterval = setInterval(autoPlay, 4000);

// Optional: Stop auto-play when user interacts with the slider
slider.addEventListener('mousedown', () => clearInterval(slideInterval));
