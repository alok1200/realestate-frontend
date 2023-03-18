import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user.user)

  const handleLogout = () => {
    dispatch(logout())
  }
  
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
        : <p onClick={handleLogout} className="navbar-link">Logout</p>
        }
      </div>
    </nav>
  );
}

export default Navbar;
