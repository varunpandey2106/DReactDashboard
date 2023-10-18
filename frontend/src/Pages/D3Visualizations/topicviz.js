import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TopicTreemap = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 400;

    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);

    const root = d3.hierarchy({ children: data })
      .sum((d) => 1) // Count for each entry
      .sort((a, b) => b.value - a.value);

    const treemap = d3.treemap()
      .size([width, height])
      .padding(1)
      (root);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const cell = svg.selectAll('g')
      .data(treemap.leaves())
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${d.x0},${d.y0})`);

    cell.append('rect')
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d) => color(d.data.topic))
      .attr('stroke', 'white');

    cell.append('text')
      .attr('x', 5)
      .attr('y', 15)
      .text((d) => d.data.region)
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr('fill', 'black');

    cell.append('text')
      .attr('x', 5)
      .attr('y', 35)
      .text((d) => d.data.topic)
      .attr('font-size', '12px')
      .attr('fill', 'black');

    // Add a title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
    //   .text('Topic Distribution by Region');
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default TopicTreemap;


