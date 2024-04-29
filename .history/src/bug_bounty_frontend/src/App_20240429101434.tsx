import { useState } from "react";
import React from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
