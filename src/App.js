// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './componets/Nav';

import Product from './componets/Product';
import Footer from './componets/Footer';
import Details from './componets/Details'
import productsData from './componets/ProductData';



import './App.css'
import Payment from './componets/payment/Payment';
import Services from './componets/Services/Services';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/detail/:id" element={<Details products={productsData} />} />
          <Route path="/" element={<Product />} />
          <Route path="/buy/:id" element={<Payment/>} /> 
          <Route path="/services" element={<Services/>} /> 
        </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
