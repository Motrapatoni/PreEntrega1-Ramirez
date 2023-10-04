import React from 'react';
import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
      <ItemListContainer tittle="¡Bienvenidos a Kwik -E- Mark!" />
    </div>
    </BrowserRouter>
  );
}

export default App;
