
  
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  FilterOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getIntensity, getRelevance, getCountry, getRegion, getSource, getTopic, getLikelihood, getYear, getPestle, getEndYear } from "../../API"; // Import your API functions

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  
  // State to store fetched data
  const [intensityData, setIntensityData] = useState([]);
  const [relevanceData, setRelevanceData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [regionData, setRegionData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [likelihoodData, setLikelihoodData] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [pestleData, setPestleData] = useState([]);
  const [endYearData, setEndYearData] = useState([]);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const intensityResponse = await getIntensity();
      const relevanceResponse = await getRelevance();
      const countryResponse = await getCountry();
      const regionResponse = await getRegion();
      const sourceResponse = await getSource();
      const topicResponse = await getTopic();
      const likelihoodResponse = await getLikelihood();
      const yearResponse = await getYear();
      const pestleResponse = await getPestle();
      const endYearResponse = await getEndYear();

      setIntensityData(intensityResponse);
      setRelevanceData(relevanceResponse);
      setCountryData(countryResponse);
      setRegionData(regionResponse);
      setSourceData(sourceResponse);
      setTopicData(topicResponse);
      setLikelihoodData(likelihoodResponse);
      setYearData(yearResponse);
      setPestleData(pestleResponse);
      setEndYearData(endYearResponse);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Filters",
            icon: <FilterOutlined />,
            key: "/filter",
          },
          // Render menu items based on fetched data
          {
            label: "Intensity",
            key: "/intensity",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Relevance",
            key: "/relevance",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Country",
            key: "/country",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Region",
            key: "/region",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Source",
            key: "/source",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Topic",
            key: "/topic",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Likelihood",
            key: "/likelihood",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Year",
            key: "/year",
            icon: <AppstoreOutlined />,
          },
          {
            label: "Pestle",
            key: "/pestle",
            icon: <AppstoreOutlined />,
          },
          {
            label: "End Year",
            key: "/end_year",
            icon: <AppstoreOutlined />,
          },
          // Add other menu items based on your data
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
