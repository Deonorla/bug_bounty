import { useState } from "react";
import React from "react";
import Button from "./components/utils/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <div>
      <p className=" font-black text-[3rem]">Deon</p>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Button>something</Button>
        <ButtonGradient />
      </div>
    </div>
  );
}

export default App;
