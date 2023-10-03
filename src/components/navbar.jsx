import React from 'react'
import { CartWidget } from './cartwidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/skins">Skins</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
          <Link to="/carrito"><CartWidget /></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};