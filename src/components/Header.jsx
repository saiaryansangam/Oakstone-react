import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ isCapitalPage = false }) => {
  return (
    <header className={`navbar ${isCapitalPage ? 'capital-navbar' : ''}`}>
        <div className="nav-container">
            <div className="logo">
                <span className="logo-icon"></span>
                <div className="logo-text">
                    <h1>OAKSTONE</h1>
                    <span className="logo-subtext">PARTNERS</span>
                </div>
            </div>
            <nav className="nav-links">
                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/capital" className={({ isActive }) => isActive ? "active" : ""}>Capital</NavLink>
                <NavLink to="/finance" className={({ isActive }) => isActive ? "active" : ""}>Finance</NavLink>
                <NavLink to="/invest" className={({ isActive }) => isActive ? "active" : ""}>Invest</NavLink>
                <NavLink to="/advisory" className={({ isActive }) => isActive ? "active" : ""}>Advisory</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
            </nav>
        </div>
    </header>
  );
};

export default Header;
