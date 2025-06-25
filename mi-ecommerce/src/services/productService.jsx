import { mockProducts } from '../data/mockData';

export const getProducts = (categoryId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(mockProducts.filter(product => product.category === categoryId));
      } else {
        resolve(mockProducts);
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(product => product.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 800);
  });
};