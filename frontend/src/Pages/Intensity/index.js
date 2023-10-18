import React from 'react';
import StackedBarChart from '../D3Visualizations/intensityviz';
// Import the StackedBarChart component

const data = [
  {
    "sector": "Energy",
    "total_intensity": 25764
  },
  {
    "sector": "Environment",
    "total_intensity": 308
  },
  {
    "sector": "Government",
    "total_intensity": 1295
  },
  {
    "sector": "Aerospace & defence",
    "total_intensity": 1144
},
{
    "sector": "Manufacturing",
    "total_intensity": 2005
},
{
    "sector": "Retail",
    "total_intensity": 1670
},
{
    "sector": "Financial services",
    "total_intensity": 2342
},
{
    "sector": "Support services",
    "total_intensity": 1028
},
{
    "sector": "Information Technology",
    "total_intensity": 1540
},
{
    "sector": "Healthcare",
    "total_intensity": 202
},
{
    "sector": "Food & agriculture",
    "total_intensity": 390
},
{
    "sector": "Automotive",
    "total_intensity": 146
},
{
    "sector": "Tourism & hospitality",
    "total_intensity": 132
},
{
    "sector": "Construction",
    "total_intensity": 318
},
{
    "sector": "Security",
    "total_intensity": 92
},
{
    "sector": "Transport",
    "total_intensity": 186
},
{
    "sector": "Water",
    "total_intensity": 28
},
{
    "sector": "Media & entertainment",
    "total_intensity": 38
}
];

function IntensityChart() {
  return (
    <div>
      <h2>Total Intensity by Sector</h2>
      <StackedBarChart data={data} /> {/* Pass the data to the StackedBarChart component */}
    </div>
  );
}

export default IntensityChart;
