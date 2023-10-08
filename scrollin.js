document.addEventListener('DOMContentLoaded', function() {
    const scrollins = document.querySelectorAll('.scroll-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        });
    }, observerOptions);

    scrollins.forEach(scrollin => {
        appearOnScroll.observe(scrollin);
    });
});