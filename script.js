// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Bootstrap's Scrollspy should work automatically with the data attributes in the HTML.
    // If you need to manually initialize or refresh (e.g., if content is loaded dynamically):
    // const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    // target: '#navbarNav',
    // offset: 70 // Adjust this if your navbar height changes
    // });

    // Optional: Smooth scroll for anchor links if not perfectly handled by Bootstrap/browser
    // This can sometimes conflict if Bootstrap's scrollspy has its own smooth scroll behavior.
    // Test if you need this.
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 70; // Your fixed header's height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // If using the Bootstrap navbar toggler, close the navbar on click for mobile
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarToggler && navbarCollapse.classList.contains('show')) {
                        if (!navbarToggler.classList.contains('collapsed')) {
                             navbarToggler.click(); // Simulate click to close
                        }
                    }
                }
            }
        });
    });
});