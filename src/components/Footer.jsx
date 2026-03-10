import React from 'react';

const Footer = ({ isCapitalPage = false }) => {
  return (
    <footer className="footer">
        <div className="container footer-grid">
            
            <div className="footer-col brand-col">
                <h3 className="footer-title">Oakstone Partners</h3>
                <p>A UK-anchored group operating internationally across capital, specialist finance and senior advisory</p>
            </div>

            <div className="footer-col links-col">
                <h4 className="footer-heading">Firm</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer-col links-col">
                <h4 className="footer-heading">Services</h4>
                <ul>
                    <li><a href="#">Capital</a></li>
                    <li><a href="#">Finance</a></li>
                    <li><a href="#">Advisory</a></li>
                    <li><a href="#">Invest</a></li>
                </ul>
            </div>

            <div className="footer-col legal-col">
                <h4 className="footer-heading">Legal</h4>
                <p>Oakstone Partners is not authorised or regulated by the UK Financial Conduct Authority or any other financial regulatory authority</p>
            </div>

        </div>

        {isCapitalPage && (
            <div className="container footer-bottom-bar">
                <div className="copyright">
                    &copy; 2026 OAKSTONE PARTNER
                </div>
                <div className="footer-legal-links">
                    <a href="#">LEGAL & REGULATORY</a>
                    <span className="divider">|</span>
                    <a href="#">PRIVACY POLICY</a>
                    <span className="divider">|</span>
                    <a href="#">COOKIE POLICY</a>
                </div>
            </div>
        )}
    </footer>
  );
};

export default Footer;
