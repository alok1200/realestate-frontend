import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <div className='nav_logo_wrapper'>
          <img src={logo} alt="" />Durga Real State
        </div>
      </Link>
      <div className="navbar-links">
        <Link to="/about" className="navbar-link">About</Link>
        {!user 
        ? <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>  
        : <Link to="/login" className="navbar-link">Logout</Link>
        }
      </div>
    </nav>
  );
}

export default Navbar;
