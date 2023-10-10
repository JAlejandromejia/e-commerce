import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {data} from '../data'


export const Buscarskin = () => {
  const[skin,setSkin] = useState({})
  const {id} = useParams();
  const getOneProduct = (itemId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(data.find((item) => item.id === itemId))
      }, 2000)
    })
  }
  useEffect(() => {
    getOneProduct(id)
    .then((res) => setSkin(res))
  }, [id])

  if (!skin) {
    return <div>No se encontro la skin</div>
  }

  return (
    <div className='detallesdeproducto'>
      <h2>Detalles de la Skin</h2>
      <img src={skin.urlImage} alt={skin.nameproduct} />
      <p className='detallesdeproductonombre'>{skin.hero} - {skin.nameproduct}</p>
      <p className='detallesdeproductorareza'>{skin.rarity}</p>
      <p className='detallesdeproductoprecio'>${skin.price}</p>
      <button>Agregar al carrito</button>
    </div>
    
  );
};