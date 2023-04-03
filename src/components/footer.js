import './footer.css';
import React from 'react';
import logo from '../images/Logo.svg'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__logo">
        <img src={logo} className="logo" alt="Logo" />
        </div>
        <div className="footer__column">
          <h3 className="footer__column-heading">Company</h3>
          <ul className="footer__column-list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-heading">Services</h3>
          <ul className="footer__column-list">
            <li>Web Design</li>
            <li>Mobile App Development</li>
            <li>SEO &amp; Marketing</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-heading">Connect</h3>
          <ul className="footer__column-list">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </footer>
    );
  };

  export default Footer;