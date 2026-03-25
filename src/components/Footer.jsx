import React from 'react';

const Footer = ({ isCapitalPage = false }) => {
  return (
    <footer className="footer">
        <div className="container footer-grid">
            
            <div className="footer-col brand-col">
                <img src="newlogo.jpg" alt="Oakstone Partners" className="footer-logo" />
                <h3 className="footer-title">Oakstone Partners</h3>
                <p>A UK-anchored group operating internationally across capital, specialist finance and senior advisory</p>
            </div>

            <div className="footer-col links-col">
                <h4 className="footer-heading">Firm</h4>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/about#contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-col links-col">
                <h4 className="footer-heading">Divisions</h4>
                <ul>
                    <li><a href="/capital">Capital</a></li>
                    <li><a href="/invest">Invest</a></li>
                    <li><a href="/finance">Finance</a></li>
                    <li><a href="/advisory">Advisory</a></li>
                </ul>
            </div>

            <div className="footer-col legal-col">
                <h4 className="footer-heading">Legal</h4>
                <p>Oakstone Partners is not authorised or regulated by the UK Financial Conduct Authority. Where relevant, products and services are provided through regulated partners and appropriate channels.</p>
            </div>

        </div>

       
            <div className="container footer-bottom-bar">
                <div className="copyright">
                    &copy; 2026 OAKSTONE PARTNER
                </div>
                <div className="footer-legal-links">
                    
                   
                </div>
            </div>
        
    </footer>
  );
};

export default Footer;
