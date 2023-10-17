// LikelihoodComponent.js
import React, { useState, useEffect } from 'react';
// In LikelihoodComponent.js
import { getLikelihood } from '../../API'; // Correct the relative path to the API

// In D3LikelihoodLineChart.js
import D3LikelihoodLineChart from '../D3Visualizations/likelihoodviz'; // Correct the relative path to the D3 visualization component


const LikelihoodComponent = () => {
  const [likelihoodData, setLikelihoodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLikelihood();
        setLikelihoodData(result);
      } catch (error) {
        // Handle errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Likelihood Data</h2>
      {likelihoodData && <D3LikelihoodLineChart data={likelihoodData} />}
    </div>
  );
};

export default LikelihoodComponent;
