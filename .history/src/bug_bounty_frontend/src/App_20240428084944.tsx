import { useState } from "react";
import { bug_bounty_backend } from "../../declarations/bug_bounty_backend";
import React from "react";

function App() {
  const [greeting, setGreeting] = useState("");

  return (
    <main>
      <p className="text-blue">Deon</p>
    </main>
  );
}

export default App;
