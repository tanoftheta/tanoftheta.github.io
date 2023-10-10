document.addEventListener('DOMContentLoaded', function() {
    let user_time = [
        { section: "home", timeSpent: 0 },
        { section: 'about', timeSpent: 0 },
        { section: 'projects', timeSpent: 0 }, 
        { section: 'contact', timeSpent: 0 }
    ];
    let currentSection = null;
    updateChart(user_time); 
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const sectionName = entry.target.getAttribute('id');
            if (entry.isIntersecting && currentSection !== sectionName) {
                if (currentSection) {
                    stopTimer();
                }
                currentSection = sectionName;
                startTimer(currentSection);
            } 
        });
    }, { threshold: 0.51 });
        
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    function startTimer(sectionName){
        let startTime = new Date().getTime(); 
        timerInterval = setInterval( () => {
            const currentTime = new Date().getTime(); 
            const elapsedTime = (currentTime - startTime) / 1000; 
            const sectionIndex = user_time.findIndex(times => times.section === sectionName);
            user_time[sectionIndex].timeSpent += elapsedTime; 
            startTime = currentTime; 
            updateChart(user_time); 
        }, 1000); 
    }

    function stopTimer(){
        clearInterval(timerInterval); 
    }
}); 