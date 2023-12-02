// Existing smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// New scroll event listener to fade out the title
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var titleOpacity = 1 - (scrollPosition / 500); // The rate of fading. Adjust the 500 to control the fade speed
    var titleElement = document.querySelector('.centered-title h1');
    if (titleElement) {
        titleElement.style.opacity = titleOpacity > 0 ? titleOpacity : 0;
    }
});
