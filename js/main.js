// JavaScript code to handle opening and closing the mobile menu
const showMenuButton = document.getElementById('main-menu-open-btn');
const hideMenuButton = document.getElementById('main-menu-close-btn');
const mobileMenu = document.getElementById('mobile-menu');

showMenuButton.addEventListener('click', () => {
   mobileMenu.style.display = 'block';
   showMenuButton.style.display = 'none';
   hideMenuButton.style.display = 'block';
});

hideMenuButton.addEventListener('click', () => {
   mobileMenu.style.display = 'none';
   showMenuButton.style.display = 'block';
   hideMenuButton.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
   const quotes = document.querySelectorAll(".quotes");
   let currentQuoteIndex = 0;

   function displayQuote(index) {
      quotes.forEach((quote, i) => {
         if (i === index) {
            quote.classList.add("active");
         } else {
            quote.classList.remove("active");
         }
      });
   }

   function nextQuote() {
      currentQuoteIndex++;
      if (currentQuoteIndex >= quotes.length) {
         currentQuoteIndex = 0;
      }
      displayQuote(currentQuoteIndex);
   }

   function startQuoteAnimation() {
      setInterval(nextQuote, 5000); // Change quote every 3 seconds (adjust as needed)
   }

   displayQuote(currentQuoteIndex); // Display the initial quote
   startQuoteAnimation(); // Start the quote animation
});

// JavaScript for the image slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
let currentIndex = 0;

// Function to move to the next slide
function nextSlide() {
   currentIndex = (currentIndex + 1) % slides.length;
   updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
   updateSlider();
}

// Function to update the slider's position
function updateSlider() {
   const offset = -currentIndex * 100;
   slider.style.transform = `translateX(${offset}%)`;
}

// Add click event listeners to navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 7000);

// Get a reference to the "Developed By Nishat Shagor" link
var developerLink = document.getElementById("developer-link");

// Add a click event listener to the link
developerLink.addEventListener("click", function (event) {
   // Prevent the default behavior of the link (i.e., following the link)
   event.preventDefault();

   // Redirect the user to the specified Facebook link
   window.location.href = "https://www.facebook.com/nishatshagor76/";
});

