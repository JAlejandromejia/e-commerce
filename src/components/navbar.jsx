import React, { useContext} from "react";
import { DataContext } from "./context/dataprovider";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faOpencart } from '@fortawesome/free-brands-svg-icons';

export const Navbar = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/Epic">Epic</Link>
          </li>
          <li>
            <Link to="/category/Legendary">Legendary</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
          <div className="cart-widget" onClick={toogleMenu}>
            <FontAwesomeIcon icon={faOpencart} />
            <span className="item__total"> {carrito.length} </span>
          </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};