import { useState } from "react";
import React from "react";
import Button from "./components/utils/Button";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <main>
      <p className=" font-black text-[3rem]">Deon</p>

      <Button className="pt-[4.75rem] lg:pt-[5.25rem]">something</Button>
    </main>
  );
}

export default App;
