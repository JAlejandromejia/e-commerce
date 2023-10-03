import React from 'react';
import { useParams } from 'react-router-dom';

export const Skins = ({ products }) => {
  const { id } = useParams();

  // Filtra los productos por la categoría seleccionada
  const filteredProducts = products.filter(product => product.categoryId === id);
  return (
    <> 
    <div className='portada'>
        <img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/15/Genji_cyber-1.jpg" alt="Genji Skin" />
        <h1>Skins</h1>
    </div>
    <hr />
    <div className="container-items">
      {filteredProducts.map(product => (
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
    </>
  )
}