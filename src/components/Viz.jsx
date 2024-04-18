import React, { useEffect  , useState} from 'react';
import styles from './Home/home.module.css'; 
import Chart from 'chart.js/auto';

function Viz({ timeSpent, scrollToSection, translateValue }) {
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsAnimationEnabled(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

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
                layout: {
                    padding: 10,
                }, 
                plugins: {
                    title: {
                        display: false,
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
                        display: false,
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
                onHover: function (event, elements) {
                    if (elements) {
                        event.native.target.style.cursor = 'pointer';
                    }
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
        <div className={`container mt-2 ${isAnimationEnabled ? styles.moveInFromBottom : null}`} style={{ height: '100%', width: '100%', transform: `translateY(-${translateValue/2}px)`, zIndex: 10}}>
            <canvas id="theViz" style={{translateX: '100px'}}></canvas>
        </div>
    );
}

export default Viz;
