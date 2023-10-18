import React from 'react';
import PieChart from '../D3Visualizations/countryviz'; // Import the PieChart component

const data = [
  {
    "country": "United States of America",
    "total_intensity": 7577
  },
  {
    "country": "Saudi Arabia",
    "total_intensity": 1296
  },
  {
    "country": "Iran",
    "total_intensity": 1243
  },
  {
    "country": "Russia",
    "total_intensity": 1151
  },
  {
    "country": "India",
    "total_intensity": 1038
  },
  {
    "country": "China",
    "total_intensity": 939
  },
  {
    "country": "Iraq",
    "total_intensity": 500
  },
  {
    "country": "Libya",
    "total_intensity": 480
  },
  {
    "country": "Indonesia",
    "total_intensity": 441
  },
  {
    "country": "Brazil",
    "total_intensity": 440
  }
];

function Country() {
  return (
    <div>
      <h2>Intensity by Country</h2>
      <PieChart data={data} />
    </div>
  );
}

export default Country;
