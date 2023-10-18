import React from 'react';
import YearChart from '../D3Visualizations/yearviz'; 

const data = [
  {
    "year": "",
    "total_relevance": 10885
  },
  {
    "year": "2017",
    "total_relevance": 344
  },
  {
    "year": "2016",
    "total_relevance": 336
  },
  {
    "year": "2020",
    "total_relevance": 129
},
{
    "year": "2040",
    "total_relevance": 74
},
{
    "year": "2030",
    "total_relevance": 68
},
{
    "year": "2025",
    "total_relevance": 58
},
{
    "year": "2018",
    "total_relevance": 49
},
{
    "year": "2035",
    "total_relevance": 41
},
{
    "year": "2019",
    "total_relevance": 25
}
];

function YearChartExample() {
  return (
    <div>
      <h2>Yearly Relevance Chart</h2>
      <YearChart data={data} />
    </div>
  );
}

export default YearChartExample;
