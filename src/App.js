import React, { useState } from "react";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return <h1>Hello my friend REACT with {people.length} more friends</h1>;
}

export default App;
