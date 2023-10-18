import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const HorizontalBarChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 60, bottom: 60, left: 100 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const colors = ['steelblue', 'orange', 'green', 'red', 'purple', 'blue', 'yellow', 'brown', 'teal'];

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.total_likelihood)])
      .range([margin.left, width]);

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.pestle))
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
      .attr('y', d => yScale(d.pestle))
      .attr('width', d => xScale(d.total_likelihood) - margin.left)
      .attr('height', yScale.bandwidth())
      .attr('fill', d => colors[d.originalColor])
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', 'lightsteelblue');

        // Display the value on hover
        valueLabel
          .style('display', 'block')
          .attr('x', xScale(d.total_likelihood) + margin.left + 5)
          .attr('y', yScale(d.pestle) + yScale.bandwidth() / 2)
          .text(d.total_likelihood);
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', colors[d.originalColor]);

        // Hide the value on mouseout
        valueLabel.style('display', 'none');
      });

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    svg.append('text')
      .attr('x', width / 2 + margin.left)
      .attr('y', margin.top / 2)
      .text('Pestle')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)');

  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default HorizontalBarChart;
