import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
      <Link to="/dashboard">Panel de Control</Link>
    </nav>
  );
};

export default Navbar;
