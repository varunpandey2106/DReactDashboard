import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const D3LikelihoodLineChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 40, right: 40, bottom: 60, left: 60 }; // Adjusted margins
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    data.forEach(d => {
      d.likelihood = +d.likelihood;
    });

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([margin.left, width + margin.left])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.likelihood)])
      .nice()
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(yAxis);

    const line = d3.line()
      .x(d => xScale(d.year) + xScale.bandwidth() / 2)
      .y(d => yScale(d.likelihood))
      .curve(d3.curveMonotoneX);

    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default D3LikelihoodLineChart;

