import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>Hello my friend REACT with {people.length} more firends </h1>
      <List people={people} />
    </div>
  );
}

export default App;
