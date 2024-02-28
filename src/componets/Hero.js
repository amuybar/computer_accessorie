
import React from 'react';
import './css_/Hero.css'; 
import Tab from './Tab';

const Hero = () => {
  return (
    <section className="hero" >
      <div className="content">
        <h1>Nairobi Computer Accesories</h1>
        <p>Welcome to <b>Nairobi Computer Accessories</b>, your one-stop destination for high-quality computer accessories that enhance your computing experience. We understand the pivotal role that technology plays in today's fast-paced world, and our mission is to provide cutting-edge accessories that complement and elevate your computing lifestyle.</p>
        <button>Sign Up </button>
        <Tab/>
      </div>
    </section>
  );
}

export default Hero;
