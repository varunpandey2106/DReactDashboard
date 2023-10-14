export const getEndYear = () => {
    return fetch("http://127.0.0.1:8000/dashboard/end_year/").then((res) => res.json());
  };
  
  export const getPestle = () => {
    return fetch("http://127.0.0.1:8000/dashboard/pestle/").then((res) => res.json());
  };
  
  export const getYear = () => {
    return fetch("http://127.0.0.1:8000/dashboard/year/").then((res) => res.json());
  };
  
  export const getLikelihood = () => {
    return fetch("http://127.0.0.1:8000/dashboard/likelihood/").then((res) => res.json());
  };
  export const getTopic = () => {
    return fetch("http://127.0.0.1:8000/dashboard/topic/").then((res) => res.json());
  };
  export const getSource = () => {
    return fetch("http://127.0.0.1:8000/dashboard/topic/").then((res) => res.json());
  };
  export const getRegion = () => {
    return fetch("http://127.0.0.1:8000/dashboard/region/").then((res) => res.json());
  };
  export const getCountry = () => {
    return fetch("http://127.0.0.1:8000/dashboard/country/").then((res) => res.json());
  };
  export const getIntensity = () => {
    return fetch("http://127.0.0.1:8000/dashboard/intensity/").then((res) => res.json());
  };
  export const getRelevance = () => {
    return fetch("http://127.0.0.1:8000/dashboard/relevance/").then((res) => res.json());
  };

