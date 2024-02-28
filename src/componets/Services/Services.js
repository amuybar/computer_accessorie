// Services.js

import React from 'react';
import './Services.css'; 
import serviceData from './serviceData';


const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-list">
        {serviceData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className='service-card-'>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className='service-detail'>
            <h3>{service.name}</h3>
            <p> {service.description}</p>
            <p>Price: {service.price}</p>
            </div>
            </div>
            <button>Get</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
