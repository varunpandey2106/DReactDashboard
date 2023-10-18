import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const width = 400 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;
  const radius = Math.min(width, height) / 2;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
      .value(d => d.total_intensity)
      .sort(null);

    const arc = g.selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    const path = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    arc.append('path')
      .attr('d', path)
      .attr('fill', d => color(d.data.country))
      .on('mouseover', function (event, d) {
        const tooltip = d3.select('#tooltip');
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip.html(`${d.data.country}<br>${d.data.total_intensity}`)
          .style('left', (event.pageX) + 'px')
          .style('top', (event.pageY - 28) + 'px');
      })
      .on('mouseout', function (d) {
        d3.select('#tooltip').transition().duration(500).style('opacity', 0);
      });

    arc.append('text')
      .attr('transform', d => {
        const pos = path.centroid(d);
        const x = pos[0];
        const y = pos[1];
        return `translate(${x}, ${y})`;
      })
      .attr('dy', '0.35em')
      .style('text-anchor', 'middle')
      .style('font-size', '12px')
      .text(d => d.data.country);

  }, [data, width, height, radius]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div id="tooltip" style={{ opacity: 0, position: 'absolute' }}></div>
    </div>
  );
};

export default PieChart;
