import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <div>
      <LandingPage />
      <ButtonGradient />
    </div>
  );
}

export default App;
