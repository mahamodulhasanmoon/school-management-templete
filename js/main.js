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



// for Blog Tab 


document.addEventListener("DOMContentLoaded", function() {
   // Show the content for the first tab by default
   const defaultTabNumber = 1;
   showTab(defaultTabNumber);
 });
 
 function showTab(tabNumber) {
   // Hide all tab contents
   const tabContents = document.querySelectorAll('.tab-contentasdf div');
   tabContents.forEach(tab => {
     tab.classList.remove('active');
   });
 
   // Remove active class from all tabs
   const tabs = document.querySelectorAll('.tabasdfaase');
   tabs.forEach(tab => {
     tab.classList.remove('active');
   });
 
   // Show the selected tab content and set active class for the tab button
   const selectedTabContent = document.getElementById(`tabsdfg${tabNumber}`);
   selectedTabContent.classList.add('active');
 
   const selectedTabButton = document.querySelector(`.tabasdfaase:nth-child(${tabNumber})`);
   selectedTabButton.classList.add('active');
 }
 

     // Function to switch tabs
     function openTab(tabId, buttonElement) {
      // Hide all tab contents
      const tabContents = document.querySelectorAll('.tab-content');
      tabContents.forEach((tab) => {
          tab.style.display = 'none';
      });

      // Remove the 'active-tab-btn' class from all tab buttons
      const tabButtons = document.querySelectorAll('.tab-btn');
      tabButtons.forEach((btn) => {
          btn.classList.remove('active-tab-btn');
      });

      // Show the selected tab content
      document.getElementById(tabId).style.display = 'block';

      // Add the 'active-tab-btn' class to the clicked tab button
      buttonElement.classList.add('active-tab-btn');
  }

  // Set the initial active tab when the page loads
  window.addEventListener('load', function () {
      setInitialTab('tab1'); // Specify the initial tab here
  });

  // Function to set the initial active tab
  function setInitialTab(tabId) {        // Show the initial tab content
   document.getElementById(tabId).style.display = 'block';

   // Add the 'active-tab-btn' class to the corresponding tab button
   const tabButton = document.querySelector(`[onclick="openTab('${tabId}', this)"]`);
   tabButton.classList.add('active-tab-btn');
}
   
