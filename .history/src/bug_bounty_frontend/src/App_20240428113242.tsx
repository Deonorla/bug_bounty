import { useState } from "react";
import React from "react";
import Button from "./components/utils/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <ButtonGradient />
      </div>
    </div>
  );
}

export default App;
