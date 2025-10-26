// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Mobile menu show/hide karna
    navLinks.classList.toggle('active');
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    // 50 pixels se zyada scroll hone par 'scrolled' class lagana
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Link click hone par mobile menu ko band karna
        navLinks.classList.remove('active'); 

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

});

// Function to copy a link (Aapka diya hua link)
function copyLink() {
    navigator.clipboard.writeText("https://hassanjatoi.github.io/hassanali/");
    alert("✅ Website link copied! Now you can share anywhere.");
}
