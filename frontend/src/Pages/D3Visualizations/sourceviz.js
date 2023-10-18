import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const HorizontalBarChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 60, bottom: 60, left: 100 }; // Adjusted margins
  const width = 800 - margin.left - margin.right; // Adjusted width
  const height = 400 - margin.top - margin.bottom;

  const colors = ['steelblue', 'orange', 'green', 'red', 'purple', 'blue', 'yellow', 'brown', 'teal'];

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.intensity)])
      .range([margin.left, width]);

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.source))
      .range([margin.top, height])
      .padding(0.1);

    data.forEach((d, i) => {
      d.originalColor = i % colors.length;
    });

    const valueLabel = svg.append('text')
      .attr('class', 'value-label')
      .style('text-anchor', 'start')
      .style('alignment-baseline', 'middle')
      .style('fill', 'black')
      .style('display', 'none');

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', margin.left)
      .attr('y', d => yScale(d.source))
      .attr('width', d => xScale(d.intensity) - margin.left)
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colors[d.originalColor])
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', 'lightsteelblue');
        valueLabel
          .style('display', 'block')
          .attr('x', xScale(d.intensity) + margin.left + 10)
          .attr('y', yScale(d.source) + yScale.bandwidth() / 2)
          .text(d.intensity);
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', colors[d.originalColor]);
        valueLabel.style('display', 'none');
      });

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    svg.append('text')
      .attr('x', width / 2 + margin.left) // Center the title
      .attr('y', margin.top / 2)
      .text('Source')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90');

  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default HorizontalBarChart;
