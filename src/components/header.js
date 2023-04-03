import './header.css';
import React from 'react';
import logo from '../images/Logo.svg'

const Header = () => {
    return(
    <header>
        <img src={logo} className="logo" alt="Logo" />
      <nav className="navbar">
      <a href="/home" className="nav-item">Home</a>
        <a href="/about" className="nav-item">About</a>
        <a href="/menu" className="nav-item">Menu</a>
        <a href="/reservations" className="nav-item">Reservations</a>
        <a href="/orderonline" className="nav-item">Order Online</a>
        <a href="/login" className="nav-item">Login</a>        
      </nav>
    </header>
  )
}

export default Header