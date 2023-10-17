import { Typography } from "antd";
import React from 'react';
import HorizontalBarChart from '../D3Visualizations/pestleviz'; // Import the HorizontalBarChart component

const data = [
  {
    "pestle": "Industries",
    "total_likelihood": 5221
  },
  {
    "pestle": "Environmental",
    "total_likelihood": 888
  },
  {
    "pestle": "Economic",
    "total_likelihood": 5382
  },
  {
    "pestle": "Political",
    "total_likelihood": 1430
  },
  {
    "pestle": "Technological",
    "total_likelihood": 283
  },
  {
    "pestle": "Organization",
    "total_likelihood": 210
  },
  {
    "pestle": "Healthcare",
    "total_likelihood": 26
  },
  {
    "pestle": "Social",
    "total_likelihood": 316
  },
  {
    "pestle": "Lifestyles",
    "total_likelihood": 84
  }
];

function Pestle() {
  return (
    <div>
      <Typography.Title level={4}>Pestle</Typography.Title>
      <HorizontalBarChart data={data} /> {/* Pass the data to the HorizontalBarChart component */}
    </div>
  );
}

export default Pestle;
