import React from "react";
import { Route, Routes } from "react-router-dom";
import Intensity from "../../Pages/Intensity";
import Relevance from "../../Pages/Relevance";
import Country from "../../Pages/Country";
import Region from "../../Pages/Region";
import Source from "../../Pages/Source";
import Topic from "../../Pages/Topic";
import Likelihood from "../../Pages/Likelihood";
import Year from "../../Pages/Year";
import Pestle from "../../Pages/Pestle";
import EndYear from "../../Pages/EndYear";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/intensity" element={<Intensity />} />
      <Route path="/relevance" element={<Relevance />} />
      <Route path="/country" element={<Country />} />
      <Route path="/region" element={<Region />} />
      <Route path="/source" element={<Source />} />
      <Route path="/topic" element={<Topic />} />
      <Route path="/likelihood" element={<Likelihood />} />
      <Route path="/year" element={<Year />} />
      <Route path="/pestle" element={<Pestle />} />
      <Route path="/end_year" element={<EndYear />} />
      {/* Add routes for other endpoints as needed */}
    </Routes>
  );
}

export default AppRoutes;
