import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  if (people.length === 0) {
    return (
      <div className='app'>
        <h1>No hay mas personas en mi Listado</h1>
        <button onClick={() => window.location.reload()}>
          Recargar Mi Listado
        </button>
      </div>
    );
  }
  return (
    <div className='app'>
      <h1>{people.length} personas en mi listado </h1>
      <List people={people} />
      <button onClick={() => setPeople([])}>Borrar Listado</button>
    </div>
  );
}

export default App;
