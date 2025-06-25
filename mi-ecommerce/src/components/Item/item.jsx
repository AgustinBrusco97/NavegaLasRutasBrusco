import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
return (
    <div className="item-card">
    <img src={product.image} alt={product.name} className="item-image" />
    <div className="item-content">
        <h3 className="item-title">{product.name}</h3>
        <p className="item-price">${product.price.toLocaleString()}</p>
        <p className="item-description">{product.description}</p>
        <Link to={`/item/${product.id}`} className="item-detail-btn">
        Ver detalle
        </Link>
    </div>
    </div>
);
};

export default Item;