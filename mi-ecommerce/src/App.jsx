import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route 
            path="/" 
            element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} 
          />
          <Route 
            path="/category/:categoryId" 
            element={<ItemListContainer greeting="Explora nuestros productos" />} 
          />
          <Route 
            path="/item/:itemId" 
            element={<ItemDetailContainer />} 
          />
          <Route 
            path="*" 
            element={<NotFound />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
