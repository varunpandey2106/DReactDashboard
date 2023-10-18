import { Typography } from "antd";
import React from 'react';
import HorizontalBarChart from '../D3Visualizations/sourceviz'; // Import the HorizontalBarChart component

const data = [
  {
    "source": "DOE EIA 2013 Energy Conference",
    "intensity": 4206
  },
  {
    "source": "Bloomberg Business",
    "intensity": 1618
  },
  {
    "source": "World Bank Group",
    "intensity": 1405
  },
  {
    "source": "OPEC",
    "intensity": 1190
  },
  {
    "source": "Resilience",
    "intensity": 1139
  },
  {
    "source": "World Bank",
    "intensity": 1112
  },
  {
    "source": "khorreports-palmoil",
    "intensity": 940
  },
  {
    "source": "Reuters",
    "intensity": 914
  },
  {
    "source": "CleanTechnica",
    "intensity": 840
  },
  {
    "source": "therobotreport",
    "intensity": 792
  }
];

function Source() {
  return (
    <div>
      <Typography.Title level={4}>Source</Typography.Title>
      <HorizontalBarChart data={data} /> {/* Pass the data to the HorizontalBarChart component */}
    </div>
  );
}

export default Source;
