import React from 'react';

export const Productlist = ({ products }) => {
  return (
    <div className="container-items">
      {products.map(product => (
        <div className="item" key={product.id}>
          <img src={product.urlImage} alt={product.nameproduct} />
          <div className="productdetails">
            <p className="info-product">
              <strong>{product.nameproduct}</strong> <br />
              {product.hero} <br />
              {product.rarity} <br />
              <strong>
                <div className="price">${product.price}</div>
              </strong>
            </p>
            <div className='buttoncontainer'><button className='addtocart' >Agregar al carrito</button></div>
          </div>
        </div>
      ))}
    </div>
  );
};