import * as d3 from 'd3';

export function createHeatmap(data, svgRef) {
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select(svgRef)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  // Define color scale based on intensity values
  const colorScale = d3.scaleSequential(d3.interpolateYlGnBu)
    .domain([0, d3.max(data, d => d.intensity)]);

  // Create an x-axis scale for regions
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.region))
    .range([margin.left, width])
    .padding(0.1);

  // Create a y-axis scale for intensity values
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.intensity)])
    .range([height, margin.top]);

  // Create a grid of rectangles, each representing intensity
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.region))
    .attr('y', d => yScale(d.intensity))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.intensity))
    .attr('fill', d => colorScale(d.intensity));

  // Add x-axis
  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.15em')
    .attr('transform', 'rotate(-45)');

  // Add y-axis
  svg.append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));
}
