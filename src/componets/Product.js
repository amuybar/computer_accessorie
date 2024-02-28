
import React from 'react';
import ProductCard from './ProductCard'; 
import './css_/Product.css'; 
import productsData from './ProductData'; 
import Hero from './Hero';


const Product = () => {
  return (
    <><Hero /><section className="products">
      <h2>Products</h2>
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section></>
  );
}


export default Product;
