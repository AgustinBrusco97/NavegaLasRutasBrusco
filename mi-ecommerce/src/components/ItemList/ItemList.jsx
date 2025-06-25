import React from 'react';
import Item from '../Item/item';
import './ItemList.css';

const ItemList = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <p>No se encontraron productos en esta categoría</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;