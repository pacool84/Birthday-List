import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>{people.length} personas en mi listado </h1>
      <List people={people} />
      <button onClick={() => setPeople([])}>Borrar Listado</button>
    </div>
  );
}

export default App;
