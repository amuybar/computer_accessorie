// TopCard.jsx
import React from 'react';

const TopCard = ({ product }) => {
  return (
    <div className="top-card">
      <div className="product-image">
        <img src={product.photos[0]} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default TopCard;
