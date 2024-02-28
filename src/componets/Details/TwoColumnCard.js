// TwoColumnCard.jsx
import React from 'react';

const TwoColumnCard = ({ product }) => {
  return (
    <div className="two-column-card">
      <div className="column">
        <img src={product.photos[3]} alt="Product Photo 3" />
      </div>
      <div className="column">
        <p>{product.description}</p>
      </div>
      {/* Add more rows for photos[4] and beyond */}
    </div>
  );
};

export default TwoColumnCard;
