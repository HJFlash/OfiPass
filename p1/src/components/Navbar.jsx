import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='navbar'>
      <Link 
        to="/" 
        className={location.pathname === '/' ? 'active' : ''}
      >
        Inicio
      </Link>
      <Link 
        to="/dashboard" 
        className={location.pathname === '/dashboard' ? 'active' : ''}
      >
        Panel de Control
      </Link>
      <Link 
        to="/login" 
        className={location.pathname === '/login' ? 'active' : ''}
      >
        Iniciar Sesión
      </Link>
    </nav>
  );
};

export default Navbar;