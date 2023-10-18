import React from 'react';
import RelevanceChart from '../D3Visualizations/relevanceviz';

const data = [
  {
    "relevance": 1119,
    "source": "DOE EIA 2013 Energy Conference"
  },
  {
    "relevance": 434,
    "source": "Bloomberg Business"
  },
  {
    "relevance": 395,
    "source": "OPEC"
  },
  {
    "relevance": 315,
    "source": "World Bank Group"
  },
  {
    "relevance": 296,
    "source": "World Bank"
  },
  {
    "relevance": 279,
    "source": "Resilience"
  },
  {
    "relevance": 270,
    "source": "khorreports-palmoil"
  },
  {
    "relevance": 194,
    "source": "CNNMoney"
  },
  {
    "relevance": 190,
    "source": "Edge and Odds"
  },
  {
    "relevance": 185,
    "source": "Business Insider"
  }
];

function Relevance() {
  return (
    <RelevanceChart data={data} />
  );
}

export default Relevance;
