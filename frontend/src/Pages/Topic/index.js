import React from 'react';
import GroupedBarChart from  '../D3Visualizations/topicviz'; // Import the GroupedBarChart component

const data = [
  {
    "topic": "oil",
    "region": "Northern America"
  },
  {
    "topic": "oil",
    "region": "World"
  },
  {
    "topic": "oil",
    "region": "Western Asia"
  },
  {
    "topic": "gas",
    "region": "Northern America"
},
{
    "topic": "oil",
    "region": "Southern Asia"
},
{
    "topic": "energy",
    "region": "Northern America"
},
{
    "topic": "gas",
    "region": "World"
},
{
    "topic": "oil",
    "region": "Eastern Europe"
},
{
    "topic": "market",
    "region": "World"
},
{
    "topic": "oil",
    "region": "Eastern Asia"
}

  // Add more data entries here
];

function TopicDistributionChart() {
  return (
    <div>
      <h2>Topic Distribution by Region</h2>
      <GroupedBarChart data={data} /> {/* Pass the data to the GroupedBarChart component */}
    </div>
  );
}

export default TopicDistributionChart;
