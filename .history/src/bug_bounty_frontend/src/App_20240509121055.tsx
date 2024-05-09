import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";

import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/sidebar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <div className="">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
