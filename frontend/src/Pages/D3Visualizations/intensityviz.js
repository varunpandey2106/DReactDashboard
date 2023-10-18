import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const StackedBarChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.sector))
      .range([margin.left, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.total_intensity)])
      .nice()
      .range([height, margin.top]);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const stack = d3.stack()
      .keys(['total_intensity'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack(data);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    svg.selectAll('g')
      .data(series)
      .enter()
      .append('g')
      .attr('fill', d => colorScale(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.data.sector))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth())
      .attr('fill', (d, i) => color(i))
      .attr('original-color', (d, i) => color(i)); // Store the original color

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-45)');

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Add hover functionality
    svg.selectAll('rect')
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', 'lightsteelblue');
        svg.append('text')
          .attr('class', 'value-label')
          .style('text-anchor', 'middle')
          .style('alignment-baseline', 'middle')
          .style('fill', 'black')
          .attr('x', xScale(d.data.sector) + xScale.bandwidth() / 2)
          .attr('y', yScale(d[1]) - (yScale(d[1]) - yScale(d[0])) / 2)
          .text(d[1] - d[0]);
      })
      .on('mouseout', function (event, d) {
        const originalColor = d3.select(this).attr('original-color');
        d3.select(this).attr('fill', originalColor);
        svg.selectAll('.value-label').remove();
      });

  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default StackedBarChart;
