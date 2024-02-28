// Nav.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css_/Nav.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
       <div className={`logo ${showMenu ? 'active-menu' : ''}`}>
        <Link className="logo" to="/">NaitecH</Link>
      </div>
      <div className={`menu ${showMenu ? 'active-menu' : ''}`}>
        {/* Show buttons on large screens */}
        <div className="menu-buttons">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/services" className="nav-button">Services</Link>
          <Link to="/about" className="nav-button">About</Link>
          <Link to="/contact" className="nav-button">Contact</Link>
        </div>

        <div className={`menu-icon ${showMenu ? 'active-menu' : ''}`} onClick={handleMenuToggle}>
          &#9776;
        </div>

        {/* Dropdown menu for small screens */}
        {showMenu && (
          <div className="dropdown-menu" ref={dropdownRef}>
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/contact" className="nav-button">Contact</Link>
            <Link to="/about" className="nav-button">About</Link>
            <Link to="/services" className="nav-button">Services</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
