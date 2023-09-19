import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faOpencart } from '@fortawesome/free-brands-svg-icons';



export const CartWidget = () => {
  return (
    <a href="././App.js">
      <div className="cart-widget">
        <FontAwesomeIcon icon={faOpencart} />
        <span className="notification"></span>
      </div>
    </a>
  );
};
