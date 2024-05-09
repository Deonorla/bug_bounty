import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";

import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <div className="">
          <Route path="/dashboard" element={<Dashboard />} />
        </div>
      </Routes>
    </div>
  );
}

export default App;
