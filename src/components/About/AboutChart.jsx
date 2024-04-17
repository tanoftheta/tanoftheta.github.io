import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './about.module.css'; 

const AboutChart = () => {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        const margin = { top: 70, right: 30, bottom: 40, left: 80 };
        const width = 1000 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        // Clear previous chart
        d3.select(chartContainerRef.current).select("svg").remove();

        const svg = d3.select(chartContainerRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const tooltip = d3.select(chartContainerRef.current)
        .append("div")
        .attr("class", "tooltip"); 

        const dataPoints = [];
        const numPoints = 100;

        for (let i = 0; i <= numPoints; i++) {
            const xValue = -1 + (i / numPoints) * 2;
            const yValue = Math.tan(xValue);
            let fact = ''
            if (xValue >= -1 && xValue <= -.95) {
                fact = 'Origin (0,0): I am a born and raised New Yorker.'
            }
            if (xValue > -.95 && xValue <= -0.19999999999999996) {
                fact = 'I am an undergraduate student at Hunter College in my final year of a degree in Computer Science with a minor in Mathematics.'
            }
            if (xValue >= -0.18000000000000005 && xValue <= 0.19999999999999996) {
                fact = 'I dont know if you can tell, but I really like data. I am particularly interested in machine learning and data science.'
            }
            if (xValue >= 0.21999999999999997 && xValue <= 0.6000000000000001) {
                fact = 'Both in my personal and professional life, I am deeply committed to conttibuting positively to the social causes that metter the most to me. Among them are racial inequality, class struggles, and the climate crisis.'
            }
            if (xValue >= 0.61 && xValue <= 1) {
                fact = 'Outside of my love for numbers and programming, I am an avid reader, doting cat owner, and ramen lover.'
            }
            dataPoints.push({ x: xValue, y: yValue , fact: fact});
        }

        console.log(dataPoints)

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

            tooltip
            .style("display", "block")
            .style("left", `${xPos + 100}px`)
            .style("top",  `${yPos + 50}px + 100vh`)
            .html(`<strong> ${d.fact} </strong>`)
        })
        const circle = svg.append("circle")
        .attr("cx", 0)  
        .attr("cy", height)
            .attr("r", 0)
            .attr("fill", "red")
            .style("stroke", "white")
            .attr("opacity", .70)
            .style("pointer-events", "none");
        
            circle.transition()
            .duration(50)
            .attr("r", 10)


        svg.append("text")
            .attr("x", width / 2)
            .attr("y", -margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", "30px")
            .text("As x approaches infinity, learn about Tan");


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
