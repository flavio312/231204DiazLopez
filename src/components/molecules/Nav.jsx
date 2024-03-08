import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className='nav-item'><Link to="/">Inicio</Link></div>
      <div className="nav-item"><Link to="/productos">Productos</Link></div>
      <div className="nav-item"><Link to="/nuevo-producto">Nuevo producto</Link></div>
      <div className="nav-item"><Link to="/ventas">Ventas</Link></div>
      <div className="nav-item"><Link to="/empleados">Empleados</Link></div>
    </nav>
  );
};

export default Nav;
