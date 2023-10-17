// EndYearComponent.js
import React, { useState, useEffect } from 'react';
import { getEndYear } from '../../API'; // Import the API function for "end year"
import D3BarChart from '../D3Visualizations/endyearviz';

const EndYearComponent = () => {
  const [endYearData, setEndYearData] = useState(null);
  const fetchData = async () => {
    try {
      const result = await getEndYear();
      setEndYearData(result);
    } catch (error) {
      // Handle errors
    }
}
  useEffect(() => {
   
    

    fetchData();
  }, []);

  return (
    <div>
      <h2>End Year Data</h2>
      {endYearData && <D3BarChart data={endYearData} />}
    </div>
  );
};

export default EndYearComponent;

