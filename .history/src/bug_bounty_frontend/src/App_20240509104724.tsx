import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Dashboard from "./pages/Dashboard";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <div>
      <LandingPage />
      <Dashboard />
      <ButtonGradient />
    </div>
  );
}

export default App;
