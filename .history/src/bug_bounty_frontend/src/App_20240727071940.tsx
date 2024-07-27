import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";

import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
