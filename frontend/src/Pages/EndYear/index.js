import React from 'react';
import LineChart from '../D3Visualizations/endyearviz'; // Import the LineChart component

const data = [
  {
    "end_year": 0,
    "region": "World"
  },
  {
    "end_year": 2018,
    "region": "World"
  },
  {
    "end_year": 2040,
    "region": "World"
  },
  {
    "end_year": 2019,
    "region": "World"
},
{
    "end_year": 2020,
    "region": "World"
},
{
    "end_year": 2022,
    "region": "World"
},
{
    "end_year": 2017,
    "region": "World"
},
{
    "end_year": 2021,
    "region": "World"
},
{
    "end_year": 2026,
    "region": "World"
},
{
    "end_year": 2050,
    "region": "World"
},
{
    "end_year": 2046,
    "region": "World"
},
{
    "end_year": 2030,
    "region": "World"
},
{
    "end_year": 2035,
    "region": "World"
},
{
    "end_year": 2041,
    "region": "World"
},
{
    "end_year": 2025,
    "region": "World"
},
{
    "end_year": 2034,
    "region": "World"
},
{
    "end_year": 2016,
    "region": "World"
},
{
    "end_year": 2024,
    "region": "World"
},
{
    "end_year": 2027,
    "region": "World"
}
  // Add more data entries here
];

function EndYearChart() {
  return (
    <div>
      <h2>End Year by Region</h2>
      <LineChart data={data} /> {/* Pass the data to the LineChart component */}
    </div>
  );
}

export default EndYearChart;
