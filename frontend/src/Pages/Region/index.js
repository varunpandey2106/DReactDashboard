import React, { useRef, useEffect } from 'react';
import {createHeatmap} from '../D3Visualizations/regionviz'; // Import the HorizontalBarChart component

const Heatmap = () => {
  const svgRef = useRef();
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const width = 800 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const data = [
    {
      "region": "World",
      "intensity": 9413
    },
    {
      "region": "Northern America",
      "intensity": 8391
    },
    {
      "region": "Southern Asia",
      "intensity": 2335
    },
    {
      "region": "Western Asia",
      "intensity": 2091
    },
    {
      "region": "Eastern Europe",
      "intensity": 1454
    },
    {
      "region": "Eastern Asia",
      "intensity": 1351
    },
    {
      "region": "South America",
      "intensity": 962
    },
    {
      "region": "Northern Africa",
      "intensity": 890
    },
    {
      "region": "Western Africa",
      "intensity": 635
    },
    {
      "region": "South-Eastern Asia",
      "intensity": 601
    }
  ];

  useEffect(() => {
    createHeatmap(data, svgRef.current); // Call the createHeatmap function

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default Heatmap;
