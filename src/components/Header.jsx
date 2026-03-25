import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ isCapitalPage = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isCapitalPage ? 'capital-navbar' : ''}`}>
        <div className="nav-container">
            <div className="logo">
                <img src="newlogo.jpg" alt="Oakstone Partners" className="logo-image" />
                
            </div>
            
            {/* Hamburger Menu Button */}
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            </button>
            
            {/* Navigation Links */}
            <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/capital" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Capital</NavLink>
                <NavLink to="/invest" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Invest</NavLink>
                <NavLink to="/Finance" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Finance</NavLink>
                <NavLink to="/advisory" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Advisory</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>About</NavLink>
                <NavLink to="/about#contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Contact</NavLink>
            </nav>
        </div>
    </header>
  );
};

export default Header;
