import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🛍️ TiendaPipuPipu
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="nav-link"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;