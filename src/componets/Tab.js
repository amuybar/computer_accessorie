// Tab.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './css_/Tab.css';
import productsData from './ProductData'; 
const Tab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSearch = () => {
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setSearchQuery(''); // Clear the input field after submission
    setShowDropdown(true); // Show the dropdown menu
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDropdown(false); // Hide the dropdown when typing in the input field
  };

  const handleDropdownClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="Tab-Container">
      <div className="container">
        <input
          className="search"
          placeholder="Search for products.."
          value={searchQuery}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display the filtered products in a styled dropdown menu */}
      {showDropdown && (
        <div ref={dropdownRef} className="dropdown-menu">
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id} onClick={() => handleDropdownClick(product.id)}>
                <div className="dropdown-item">
                  <img src={product.photos[0]} alt={product.name} className="thumbnail" />
                  <span>{product.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

    
    </div>
  );
};

export default Tab;
