import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './about.module.css'; 

const AboutChart = () => {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const margin = { top: 0.1 * window.innerHeight, right: 0.03 * window.innerWidth, bottom: 0.08 * window.innerHeight, left: 0.08 * window.innerWidth };
        const width = window.innerWidth - margin.left - margin.right;
        const height = window.innerHeight - margin.top - margin.bottom;

        // Clear previous chart
        d3.select(chartContainerRef.current).select("svg").remove();

        const svg = d3.select(chartContainerRef.current)
            .append("svg")
            .attr("width", `100%`)
            .attr("height", `100%`)
            .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
            .attr("preserveAspectRatio", "xMidYMid")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const tooltip = d3.select('#chartContainer')
        .append("div")
        .attr("class", "tooltip"); 

        const dataPoints = [];
        const numPoints = 100;

        for (let i = 0; i <= numPoints; i++) {
            const xValue = -1 + (i / numPoints) * 2;
            const yValue = Math.tan(xValue);
            let fact = ''
            let image= '';
            if (xValue >= -1 && xValue <= -.95) {
                fact = 'Origin (0,0): I am a born and raised New Yorker, first-generation American, and first-generation college student.'
            }
            if (xValue > -.95 && xValue <= -0.50099999999996) {
                fact = 'I am an undergraduate student at Hunter College in my final year of a degree in Computer Science with a minor in Mathematics.'
                image = '<br> <img src="public/hunterCollege.png" alt="hunter" style="max-width: 110px; max-height: 110px;" />';
            }
            if (xValue > -.50099999999 && xValue <= -.1){
                fact = 'I dont know if you can tell, but I really enjoy working with data. I am particularly interested in machine learning and data science. I make it a goal to find the unsung hero in numbers and tell their story.'
            }
            if (xValue > -0.1 && xValue <= 0.3) {
                fact = 'Both in my personal and professional life, I am deeply committed to contributing positively to combat social issues that matter the most to me. Among them are racial inequality, class struggles, and the climate crisis.'
            }
            if (xValue > 0.3 && xValue <= 0.6000000000000001) {
                fact = 'In my spare time, I like to code retro 8-bit style mini games. I find pixel art really fun to create!'
                image = '<br> <img src="public/gameDev.PNG" alt="pixelArt" style="max-width: 100px; max-height: 100px;" />';
            }
            if (xValue >= 0.61 && xValue <= 1) {
                fact = 'Outside of my love for numbers and programming, I am an avid reader, doting cat owner, and ramen lover. <br>I have 5 years of experience working in restaurants in NYC, Ive even made ramen for presidential candidates!';
                image = '<br> <img src="public/kulfiandi.png" alt="catpic" style="max-width: 110px; max-height: 110px;" />';
            }
            fact += image; 
            dataPoints.push({ x: xValue, y: yValue , fact: fact});
        }

        const xScale = d3.scaleLinear()
            .domain(d3.extent(dataPoints, d => d.x))
            .range([0, width]);

        const yScale = d3.scaleLinear()
            .domain([d3.min(dataPoints, d => d.y), d3.max(dataPoints, d => d.y)])
            .range([height, 0]);

        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveNatural); // Use a natural curve for the line

        svg.append("path")
            .datum(dataPoints)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 5) // Set initial stroke width
            .attr("d", line)
        
        const listeningRect = svg.append("rect")
            .attr("width", width)
            .attr("height", height); 
        
        listeningRect.on("mousemove", function(event){
            const [xCoord] = d3.pointer(event, this)
            const bisect = d3.bisector(d => d.x).left; 
            const x0 = xScale.invert(xCoord);
            const i = bisect(dataPoints, x0, 1);
            const d0 = dataPoints[i-1]; 
            const d1 = dataPoints[i]; 
            const d = x0 - d0.x > d1.x - x0 ? d1: d0;
            const xPos = xScale(d.x); 
            const yPos = yScale(d.y); 
            circle.attr("cx", xPos)
            .attr("cy", yPos);

            const tooltipWidth = tooltip.node().offsetWidth;
            const tooltipHeight = tooltip.node().offsetHeight;
        
            let tooltipLeft = xPos; 
            let tooltipTop = yPos; 
        
            if (tooltipLeft + tooltipWidth > window.innerWidth) {
                tooltipLeft = window.innerWidth - tooltipWidth;
            }
            if (tooltipTop + tooltipHeight > window.innerHeight) {
                tooltipTop = window.innerHeight - tooltipHeight;
            }
        
            tooltip
                .style("display", "block")
                .style("left", `${tooltipLeft}px`)
                .style("top",  `${tooltipTop}px + 100vh`)
                .style("width", '30%')
                .html(`<strong> ${d.fact} </strong>`);
        })

        listeningRect.on("mouseleave", function() {
            tooltip.style("display", "none");
        })
        const circle = svg.append("circle")
        .attr("cx", 0)  
        .attr("cy", height)
            .attr("r", 0)
            .attr("fill", "red")
            .style("stroke", "white")
            .attr("opacity", 1.0)
            .style("pointer-events", "none");
        
            circle.transition()
            .duration(50)
            .attr("r", 10)


        svg.append("text")
            .attr("x", width / 2)
            .attr("y", -margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "30px")
            .style("font-weight", 'bold')
            .text("As x approaches ∞, learn about me");


        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale).ticks(0))
            .style("stroke-width", 4)

        svg.append("g")
            .call(d3.axisLeft(yScale).ticks(0))
            .style("stroke-width", 4)
        
        }, []);

    return <div ref={chartContainerRef} />;
};

export default AboutChart;
