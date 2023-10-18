import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const EndYearAreaChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    // Extract years from the data
    const years = data.map(d => d.end_year);

    // Extract the maximum value for scaling
    const maxYear = d3.max(years);

    // Create the x and y scales
    const xScale = d3.scaleLinear()
      .domain([0, maxYear])
      .range([margin.left, width]);

    const yScale = d3.scaleLinear()
      .domain([0, 1]) // Y-axis scaling for area chart
      .range([height, margin.top]);

    const areaGenerator = d3.area()
      .x(d => xScale(d.end_year))
      .y0(height)
      .y1(d => yScale(0.5)) // Middle point for Y-axis for the area chart

    svg.append('path')
      .datum(data)
      .attr('fill', 'steelblue')
      .attr('d', areaGenerator);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('text')
      .attr('x', width / 2 + margin.left)
      .attr('y', height + margin.top + 20)
      .text('End Year')
      .attr('text-anchor', 'middle');

  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default EndYearAreaChart;
