import React from 'react';
import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer tittle="¡Bienvenidos a Kwik -E- Mark!" />
    </div>
  );
}

export default App;
