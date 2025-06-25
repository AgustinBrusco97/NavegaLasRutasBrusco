import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import Loading from '../../components/Loading/Loading';
import { getProducts } from '../../services/productService';
import { categories } from '../../data/mockData';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, [categoryId]);

  const getCategoryName = () => {
    if (!categoryId) return 'Todos los productos';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Categoría desconocida';
  };

  return (
    <div className="item-list-container">
      <div className="container">
        <div className="container-header">
          <h1>{greeting}</h1>
          <h2>{getCategoryName()}</h2>
        </div>
        
        {loading ? (
          <Loading />
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;