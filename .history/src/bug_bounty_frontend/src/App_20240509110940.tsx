import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <ButtonGradient /> */}
    </Routes>
  );
}

export default App;
