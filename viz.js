function updateChart(user_time) {
    const ctx = document.getElementById('theViz').getContext('2d');
    if (window.theViz instanceof Chart) {
        window.theViz.destroy();
    }
    ctx.clearRect(0,0, theViz.width, theViz.height)
    window.theViz = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: user_time.map(entry => entry.section),
            datasets: [{
                label: 'Time Spent (in seconds)',
                data: user_time.map(entry => parseFloat(entry.timeSpent.toFixed(2))),
                backgroundColor: ['#18d1e2', '#62d09d', '#8bc34a', '#ffa15d', '#8eca78'],
                hoverBackgroundColor: ['#15b8c1', '#54a382', '#77a138', '#e6894e', '#79b56c'], 
                borderWidth: 2,
                borderColor: '#000000', 
                hoverOffset: 25
            }]
    },
        options: {
            animation: false, 
            plugins: {
                title: {
                    display: true,
                    text: "Your visit:",
                    font: {
                        family: 'Roboto Mono',
                        size: 20,
                        weight: 'bold' 
                    },
                    color: "#000000",
                    align: 'center'
                },
                subtitle: {
                    display: true, 
                    text: "Where your attention has gravitated during your stay.",
                    font: {
                        family: 'Roboto Mono',
                        size: 12,
                        weight: 'bold',
                        color: "#000000" 
                    }, 
                    align: 'center'
                },
                legend: {
                    position: 'right',
                    labels: {
                            font: {
                                family: 'Roboto Mono'
                            }, 
                            color: "#000000",
                            hoverBackgroundColor: "#0000FF"
                        }, 
                    onHover: function(event, legendItem){
                        if (legendItem){
                            event.native.target.style.cursor = 'pointer'; 
                        }
                    },
                    onLeave: function(event, legendItem){
                        if (legendItem){
                            event.native.target.style.cursor = 'default'; 
                        }
                    }, 
                    onClick: function(event, legendItem) {
                        const clickedSection = legendItem.text;
                        const sectionElement = document.getElementById(clickedSection);
                        if (sectionElement) {
                            sectionElement.scrollIntoView({ behavior: 'smooth' });
                        }
                        }
                    }
                }, 
            layout: {
                padding: 10
            },
            onClick: function(event, elements) {
                if (elements.length > 0) {
                    const clickedSection = elements[0].index;
                    const sectionId = user_time[clickedSection].section;
                    const sectionName = document.getElementById(sectionId);
                    if (sectionName) {
                            sectionName.scrollIntoView({ behavior: 'smooth' });
                    }
                    }
                },
        }
        });
}
