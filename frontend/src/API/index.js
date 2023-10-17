import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Your backend URL

export const getEndYear = async () => {
  try {
    const response = await fetch(`${BASE_URL}/dashboard/end_year/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPestle = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/pestle/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getYear = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/year/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getLikelihood = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/likelihood/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getTopic = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/topic/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getSource = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/source/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getRegion = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/region/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getCountry = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/country/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getIntensity = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/intensity/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getRelevance = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/dashboard/relevance/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
