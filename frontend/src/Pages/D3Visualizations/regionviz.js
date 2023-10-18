import * as d3 from 'd3';

export function createHeatmap(data, svgRef) {
  const margin = { top: 20, right: 30, bottom: 80, left: 60 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select(svgRef)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  const colorScale = d3.scaleSequential(d3.interpolateYlGnBu)
    .domain([0, d3.max(data, d => d.intensity)]);

  const xScale = d3.scaleBand()
    .domain(data.map(d => d.region))
    .range([margin.left, width])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.intensity)])
    .range([height, margin.top]);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', d => xScale(d.region))
    .attr('y', d => yScale(d.intensity))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.intensity))
    .attr('fill', d => colorScale(d.intensity))
    .on('mouseover', function (event, d) {
      // Change the fill color on hover
      d3.select(this).attr('fill', 'lightsteelblue');

      // Display a tooltip on hover
      const tooltip = svg.append('text')
        .attr('class', 'tooltip')
        .attr('x', xScale(d.region) + xScale.bandwidth() / 2)
        .attr('y', yScale(d.intensity) - 10)
        .text(`${d.region}: ${d.intensity}`)
        .style('text-anchor', 'middle');
    })
    .on('mouseout', function () {
      // Restore the original fill color on mouseout
      d3.select(this).attr('fill', d => colorScale(d.intensity));

      // Remove the tooltip on mouseout
      svg.select('.tooltip').remove();
    });

  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.15em')
    .attr('transform', 'rotate(-45)');

  svg.append('g')
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));
}
