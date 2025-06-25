import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Página no encontrada</h2>
      <p className="not-found-message">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="not-found-btn">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;