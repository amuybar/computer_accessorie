
import React from 'react';
import './css_/Card.css'; 
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product}) => {
  const navigate = useNavigate(); 

  const handleDropdownClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="product-card" key={product.id} onClick={() => handleDropdownClick(product.id)}>
      <div className="product-image-container">
        <img src={product.photos[0]} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <hr className="separator" />
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}


export default ProductCard;
