// Smooth scrolling for any remaining anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Event listeners
window.addEventListener('scroll', () => {
    animateOnScroll();
    updateScrollIndicator();
    parallaxEffect();
});

window.addEventListener('load', () => {
    animateOnScroll();
});

// Resize handler for mobile (minimal now)
window.addEventListener('resize', () => {
    // Handle any resize-specific logic here
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
});