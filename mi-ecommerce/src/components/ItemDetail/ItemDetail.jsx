import React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    alert(`¡Agregaste ${quantity} ${product.name}(s) al carrito!`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-grid">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="item-detail-image"
          />
        </div>
        <div className="item-detail-info">
          <div>
            <h1 className="item-detail-title">{product.name}</h1>
            <p className="item-detail-price">
              ${product.price.toLocaleString()}
            </p>
            <p className="item-detail-description">{product.description}</p>
          </div>
          
          <div className="item-detail-actions">
            <ItemCount
              stock={product.stock}
              onAdd={handleAddToCart}
            />
            <button onClick={handleBack} className="back-btn">
              ← Volver al catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;