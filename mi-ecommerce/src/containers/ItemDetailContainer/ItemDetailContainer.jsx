import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading';
import { getProductById } from '../../services/productService';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    getProductById(itemId)
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div className="item-detail-container">
        <div className="container">
          <Loading />
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="item-detail-container">
        <div className="container">
          <div className="error-container">
            <h2 className="error-title">Error</h2>
            <p className="error-message">{error}</p>
            <Link to="/" className="error-btn">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <div className="container">
        <ItemDetail product={product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;