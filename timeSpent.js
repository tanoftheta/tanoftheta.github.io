document.addEventListener('DOMContentLoaded', function() {
    let user_time = [
        { section: "home", startTime: null, timeSpent: 0 },
        { section: 'about', startTime: null, timeSpent: 0 },
        { section: 'projects', startTime: null, timeSpent: 0 }, 
        { section: 'contact', startTime: null, timeSpent: 0 }
    ];
    let currentSection = null;
    let observerTimeoutId;
    updateChart(user_time); 
    
    const observer = new IntersectionObserver(entries => {
        clearTimeout(observerTimeoutId); 
        observerTimeoutId = setTimeout(() => {
            entries.forEach(entry => {
                const sectionName = entry.target.getAttribute('id');
                if (entry.isIntersecting && currentSection !== sectionName) {
                    if (currentSection) {
                        if (currentSection === "home"){
                            stopTimer(); 
                        }
                        else{
                            recordExit(currentSection);
                        }
                    }
                    currentSection = sectionName;
                    if (sectionName === "home") {
                        startTimer(); 
                    }
                    else{
                        recordEntry(sectionName);
                    }
                }
                updateChart(user_time); 
            });
        }, 1000); 
    }, { threshold: 0.51 });
        
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    function startTimer(){
        let startTime = new Date().getTime(); 
        timerInterval = setInterval( () => {
            const currentTime = new Date().getTime(); 
            const elapsedTime = (currentTime - startTime) / 1000; 
            const homeIndex = user_time.findIndex(times => times.section === "home");
            user_time[homeIndex].timeSpent += elapsedTime; 
            startTime = currentTime; 
            updateChart(user_time); 
        }, 1000); 
    }

    function stopTimer(){
        clearInterval(timerInterval); 
    }

    function recordEntry(sectionName){
        const timeIndex = user_time.findIndex(times => times.section === sectionName);
        user_time[timeIndex].startTime = new Date(); 
    }

    function recordExit(sectionName){
        const timeIndex = user_time.findIndex(times => times.section === sectionName);
        if (user_time[timeIndex].startTime !== null){
            const time = user_time[timeIndex];
            time.timeSpent = (new Date() - time.startTime) / 1000;
            if (time.timeSpent > 0){
                user_time[timeIndex].timeSpent += time.timeSpent
            }
        }
    }
    console.log(user_time)
    
}); 