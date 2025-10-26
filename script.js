// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Copy website link function
function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert('Website link copied to clipboard!');
}
