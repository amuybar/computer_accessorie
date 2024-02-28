// Details.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css_/Details.css'

const Details = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,  
    centerPadding: '25%',
  };

  return (
    <div className="details-page">
      <div className="top-card">
        <div className="product-image">
          <img src={product.photos[0]} alt={product.name} />
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          <Link to={`/buy/${id}`} className="buy-button">Buy Now</Link> {/* Add Buy button */}
    
        </div>
      </div>

      <div className="carousel-card">
        <h2>Product Photos</h2>
        <Slider {...sliderSettings}>
          {product.photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Product ${index + 1}`} className='carousel-img'/>
            </div>
          ))}
        </Slider>
      </div>

      {/* Two-Column Card */}
      <div className="two-column-card">
       <div className='item'> <div className="right-column ">
          <img src={product.photos[1]} alt="" />
          </div> <div className="left-column">
          <p>{product.description}</p>
        </div></div>
        <div className='item'> <div className="right-column ">
          <img src={product.photos[2]} alt="" />
          </div> <div className="left-column">
          <p>{product.description}</p>
        </div></div>
        <div className='item'> <div className="right-column ">
          <img src={product.photos[3]} alt="" />
          </div> <div className="left-column">
          <p>{product.description}</p>
        </div></div>
        <Link to={`/buy/${id}`} className="buy-button">Buy Now</Link> 
        
    
      </div>

      <div className="specifications-card">
       
        <ul>
          <h3>{product.spesifications[0]}</h3>
          <h3>{product.spesifications[1]}</h3>
          <h3>{product.spesifications[2]}</h3>
        </ul>
      </div>
    </div>
  );
};

export default Details;
