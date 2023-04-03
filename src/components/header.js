import './header.css';
import React from 'react';
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <nav className='navbar'>
          <Link to='/' className='nav-item'>
            Home
          </Link>
          <Link to='/about' className='nav-item'>
            About
          </Link>
          <Link to='/services' className='nav-item'>
            Menu
          </Link>
          <Link to='/bookingPage' className='nav-item'>
            Reservations
          </Link>
          <Link to='/orderOnline' className='nav-item'>
            Order Online
          </Link>
          <Link to='/Login' className='nav-item'>
            Login
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
