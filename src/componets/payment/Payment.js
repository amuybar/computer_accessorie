
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsData from '../ProductData';

import './Payment.css'; 



const Payment = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(''); 
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState('');
 
  
  

  useEffect(() => {
    const product = productsData.find((item) => item.id === parseInt(id, 10));

    if (product) {
      setProductDetails({
        id: product.id,
        name: product.name,
        price:product.price,
        image: product.photos[0],
      });
    } else {
      navigate('/'); // Navigate back to the home page if product not found
    }
  }, [id, navigate]);
  
  const handlePayment = () => {
    // Implement your payment processing logic here
    if (productDetails) {
      alert(`Payment successful for ${productDetails.name}`);
      navigate('/'); // Navigate back to the home page after successful payment
    }
  };
  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails(e.target.value);
  };
  const paymentMethods = ['Credit Card', 'PayPal', 'Google Pay', 'Apple Pay', 'M-Pesa'];

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>

      {productDetails && (
        <div className="product-details">
        
          <img src={productDetails.image} alt={productDetails.name} />
        <div className="product-details-left">  
        <h3>Product Details:</h3>
          <p>Name: {productDetails.name}</p>
          <p>Price: {productDetails.price}</p>
          </div>
        </div>
      )}

      {/* Quantity Selection */}
      <div className="selection-section">
        <h3>Quantity:</h3>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </div>

      {/* Color Selection */}
      <div className="selection-section">
        <h3>Select Color:</h3>
        {/*  color selection UI based on available colors */}
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
            <option value="black">Red</option>
          <option value="grey">Blue</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          {/*  color options based on your product data */}
        </select>
      </div>

      {/* Payment Method Selection */}
      <div>
        <h3>Select Payment Method:</h3>
        <div className="payment-methods">
          {paymentMethods.map((method) => (
            <div
              key={method}
              className={`payment-method-box ${selectedPayment === method ? 'selected' : ''}`}
              onClick={() => setSelectedPayment(method)}
            >
              {method}
            </div>
          ))}
        </div>
      </div>

       {/* Payment Details Input */}
       {selectedPayment && (
        <div>
          <h3>Enter Payment Details:</h3>
          <input
          className='payment-details-input '
            type="text"
            value={paymentDetails}
            onChange={handlePaymentDetailsChange}
            placeholder={`Enter ${selectedPayment} details`}
          />
        </div>
      )}
      <div className='payment-method'>
        <button onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Payment;
