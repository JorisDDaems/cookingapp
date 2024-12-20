import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
          <button onClick={() => onAddToCart(product)}>Voeg toe aan winkelwagentje</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList; 