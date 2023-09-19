import React from 'react'
import { CartWidget } from './cartwidget';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="./App.js">Inicio</a>
          </li>
          <li>
            <a href="./App.js">Skins</a>
          </li>
          <li>
            <a href="./App.js">Nosotros</a>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};