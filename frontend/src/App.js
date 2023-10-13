import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    relevanceData: [],
    intensityData: [],
    countryData: [],
    regionData: [],
    sourceData: [],
    topicRegionData: [],
    likelihoodData: [],
    yearRelevanceData: [],
    endYearRegionData: [],
    pestleData: [],
  };

  componentDidMount() {
    // Define an array of endpoint names
    const endpoints = [
      'relevance', 'intensity', 'country', 'region', 'source', 'topic',
      'likelihood', 'year', 'end_year', 'pestle'
    ];

    // Make API requests for each endpoint
    endpoints.forEach(endpoint => {
      axios.get(`http://127.0.0.1:8000/dashboard/${endpoint}/`)
        .then(response => {
          this.setState({
            [`${endpoint}Data`]: response.data,
          });
        })
        .catch(error => {
          console.error(`Error fetching data for ${endpoint}: ${error}`);
        });
    });
  }

  render() {
    return (
      <div className="App">
        {/* Render your data here, e.g., mapping through state.relevanceData, state.intensityData, etc. */}
        {this.state.relevanceData.map((data, id) => (
          <div key={id}>
            <h2>{data.relevance}</h2>
            {/* Render other data fields */}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
