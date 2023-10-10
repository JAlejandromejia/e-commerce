import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {data} from '../data'

export const Skins = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams();
  const getProducts = () =>{
    return new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(data)
      }, 2000)
    })
  }
  useEffect(()=>{
    getProducts()
    .then((res)=>{
      if(id){
         // Filtra los productos por la categoría seleccionada
        setProducts(res.filter((item)=> item.rarity === id))
      }else{
        //No existe el filtro trae toda la data
        setProducts(res)
      }
    })
    //Se deja al useEffect a la escucha del cambio de categorias
  },[id])
  return (
    <> 
    <div className='portada'>
        <img src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/09/15/Genji_cyber-1.jpg" alt="Genji Skin" />
        <h1>Skins</h1>
    </div>
    <hr />
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
            <div className='buttoncontainer'><Link to={'/item/'+product.id} className='addtocart' >Ver detalle </Link></div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}