import React from 'react';
import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import { ItemDetailContainer } from './componets/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './componets/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:name" element={<ItemDetailContainer />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
