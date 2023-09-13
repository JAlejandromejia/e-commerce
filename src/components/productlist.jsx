import React from 'react';
import { data } from '../data';

export const Productlist = ({ allProducts, setAllproducts }) => {
  
  return (
    <div className="container-items">
        {data.map(product => (
            <div className="item" keys={product.id}>
                    <img src={product.urlImage} alt={product.nameproduct}/>
                <div className="productdetails">
                    <p className="info-product"><strong>{product.nameproduct}</strong> <br /> {product.hero} <br /> {product.rarity} <br /> <strong><div className="price">${product.price}</div></strong></p>
                    <div className='buttoncontainer'><button className='addtocart' >Agregar al carrito</button></div>
                </div>
            </div>
        ))}
    </div>
  );
};
