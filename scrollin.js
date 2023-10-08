document.addEventListener('DOMContentLoaded', function() {
    const scrollins = document.querySelectorAll('.scroll-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: .50
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            setTimeout( () => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            } else {
                entry.target.classList.remove('appear');
            }
        }, 500); 
        });
    }, observerOptions);

    scrollins.forEach(scrollin => {
        appearOnScroll.observe(scrollin);
    });
});