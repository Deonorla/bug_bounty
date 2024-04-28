import { useState } from "react";
import { bug_bounty_backend } from "../../declarations/bug_bounty_backend";
import React from "react";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
    </main>
  );
}

export default App;
