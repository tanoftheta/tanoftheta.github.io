import React, { useEffect, useRef } from 'react'; 
import Chart from 'chart.js/auto';
import { getSvg } from '../../../utils/svgs';

export const TechStack = ({ techs, currentSection }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const stacks = ["Front End", "Back End", "Tools"]; 
        const stackColors = ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)']
        const items  = Object.keys(techs);
        const label = items.map(item => techs[item].label); 
        const images = label.map(lab =>getSvg(lab) )
        const info = items.map(item => techs[item].info)
        const data = items.map(item => techs[item].value);
        const backgroundColors = items.map(item => {
            switch (techs[item].stack) {
                case 'frontEnd':
                    return 'rgba(255, 99, 132, 0.6)';
                case 'backEnd':
                    return 'rgba(54, 162, 235, 0.6)';
                case 'tools':
                    return 'rgba(75, 192, 192, 0.6)';
                default:
                    return 'rgba(255, 206, 86, 0.6)';
            }
        });
        const ctx = chartRef.current;
       /* if (currentSection !== "projects") {
            if (ctx) {
                if (chartRef.current.chart) {
                    chartRef.current.chart.destroy();
                }
            }
            return
        } */ 
        if (ctx) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }


        const segmentImage = {
            id: 'segmentImage', 
            afterDatasetDraw(chart, args, plugins){
                const width = 30; 
                const {ctx} = chart; 
                ctx.save(); 
                chart.getDatasetMeta(0).data.forEach((datapoint, index) => {
                    const image = new Image(); 
                    image.src = images[index]; 
                    const x = chart.getDatasetMeta(0).data[index].tooltipPosition().x; 
                    const y = chart.getDatasetMeta(0).data[index].tooltipPosition().y; 

                    ctx.drawImage(image, x - (width /2), y - (width/2), width, width)
                });
            }
        }
            chartRef.current.chart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: label,
                    datasets: [{
                        data: data,
                        backgroundColor: backgroundColors, 
                        hoverOffset: 25
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    animation: {
                        animateRotate: true,
                        animateScale: true
                    }, 
                    layout: {
                        padding: 10, 
                    }, 
                    plugins: {
                        title: {
                            text: "Tech Stack",
                            display: true,
                            font: {
                                family: 'Roboto Mono',
                                size: '20px',
                                color: '#FF0000', 
                            } 
                        }, 
                        tooltip: {
                            usePointStyle: true, 
                            callbacks: {
                                title: function(context) {
                                    return label[context.dataIndex];
                                },
                                label: function(context) {
                                    return info[context.dataIndex]; 
                                },
                                
                                
                            }
                        },
                        legend: {
                            labels: {
                                generateLabels: function(chart) {
                                    return stacks.map(function(stack, index) {
                                        return {
                                            text: stack,
                                            fillStyle: stackColors[index], 
                                        };
                                    });
                                }
                            }
                        }
                    },
                    scales: {
                        r: {
                            ticks: {
                                display: false, 
                            }, 
                        }
                    },
                }, 
                plugins:[segmentImage], 
            });
         } 
        return () => {
            if (chartRef.current.chart){
            chartRef.current.chart.destroy();
            }
        }
    }, []);


    return <canvas ref={chartRef}></canvas>;
};
