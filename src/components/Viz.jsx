import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

function Viz({ timeSpent, scrollToSection }) {
    useEffect(() => {
        const ctx = document.getElementById('theViz').getContext('2d');
        if (window.theViz instanceof Chart) {
            window.theViz.destroy();
        }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const backgroundColors = ['#18d1e2', '#62d09d', '#8bc34a', '#ffa15d', '#8eca78'];
        const hoverBackgroundColors = ['#15b8c1', '#54a382', '#77a138', '#e6894e', '#79b56c'];

        window.theViz = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(timeSpent),
                datasets: [{
                    label: 'Time Spent (in seconds)',
                    data: Object.values(timeSpent),
                    backgroundColor: backgroundColors,
                    hoverBackgroundColor: hoverBackgroundColors,
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
                        onHover: function (event, legendItem) {
                            if (legendItem) {
                                event.native.target.style.cursor = 'pointer';
                            }
                        },
                        onLeave: function (event, legendItem) {
                            if (legendItem) {
                                event.native.target.style.cursor = 'default';
                            }
                        },
                        onClick: function (event, legendItem) {
                            const clickedSectionIndex = legendItem.index;
                            const keys = Object.keys(timeSpent);
                            const sectionId = keys[clickedSectionIndex];
                            scrollToSection(sectionId); 
                        }
                    }
                },
                layout: {
                    padding: 10
                },
                onClick: function(event, elements) {
                    if (elements.length > 0) {
                        const clickedSection = elements[0].index;
                        const keys = Object.keys(timeSpent);
                        const sectionId = keys[clickedSection];
                        scrollToSection(sectionId); 
                        }
                    },
            }
        });

        return () => {
            window.theViz.destroy();
        }
    }, [timeSpent]);

    return (
        <div className='container'>
            <canvas style={{ height: '100%', width: '100%' }} id="theViz"></canvas>
        </div>
    );
}

export default Viz;
