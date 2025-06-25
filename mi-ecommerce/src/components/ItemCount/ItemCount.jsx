import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          className="count-btn"
        >
          -
        </button>
        <span className="count-display">{count}</span>
        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          className="count-btn"
        >
          +
        </button>
      </div>
      <button onClick={handleAddToCart} className="add-cart-btn">
        Agregar al carrito
      </button>
      <p className="stock-info">Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount;