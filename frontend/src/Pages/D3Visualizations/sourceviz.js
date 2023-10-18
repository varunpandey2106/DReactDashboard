import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const YearChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.year))
      .range([margin.left, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.total_relevance)])
      .nice()
      .range([height, margin.top]);

    const areaGenerator = d3.area()
      .x(d => xScale(d.year))
      .y0(height)
      .y1(d => yScale(d.total_relevance));

    const valueLabel = svg.append('text')
      .attr('class', 'value-label')
      .style('text-anchor', 'middle')
      .style('alignment-baseline', 'hanging')
      .style('fill', 'black')
      .style('display', 'none');

    svg.append('path')
      .datum(data)
      .attr('fill', 'steelblue')
      .attr('d', areaGenerator);

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.year) + xScale.bandwidth() / 2)
      .attr('cy', d => yScale(d.total_relevance))
      .attr('r', 5)
      .attr('fill', 'steelblue')
      .on('mouseover', function (event, d) {
        d3.select(this).attr('fill', 'lightsteelblue');
        valueLabel
          .style('display', 'block')
          .attr('x', xScale(d.year) + xScale.bandwidth() / 2)
          .attr('y', yScale(d.total_relevance) - 10)
          .text(d.total_relevance);
      })
      .on('mouseout', function (event, d) {
        d3.select(this).attr('fill', 'steelblue');
        valueLabel.style('display', 'none');
      });

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

  }, [data, height, width]);

  return <svg ref={svgRef}></svg>;
};

export default YearChart;
