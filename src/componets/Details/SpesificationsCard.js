// SpecificationsCard.jsx
import React from 'react';

const SpecificationsCard = ({ product }) => {
  return (
    <div className="specifications-card">
      <h2>Product Specifications</h2>
      <ul>
        <li>Specification 1: {product.specs.specification1}</li>
        <li>Specification 2: {product.specs.specification2}</li>
        {/* Add more specifications as needed */}
      </ul>
    </div>
  );
};

export default SpecificationsCard;
