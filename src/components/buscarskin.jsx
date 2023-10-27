import React, {useState, useEffect, useContext} from 'react';
import { useParams} from 'react-router-dom';
import { DataContext } from './context/dataprovider';
import {data} from '../data'


export const Buscarskin = () => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito
  
  const[skin,setSkin] = useState({})
  const {id} = useParams();

  const getOneProduct = (itemId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(data.find((item) => item.id === itemId))
      }, 1000)
    })
  }
  useEffect(() => {
    getOneProduct(id)
    .then((res) => setSkin(res))
  }, [id])

  if (!skin) {
    return <div>No se encontro la skin</div>
  };

  return (
    <>
    <h2 className='detallesdeproductotitulo'>Detalles de la Skin</h2>
    <div className='detallesdeproducto'>
      <img src={skin.urlImage} alt={skin.nameproduct} />
      <div className='detallesdeproductoinfo'>
        <p className='detallesdeproductonombre'>{skin.hero} - {skin.nameproduct}</p>
        <p className='detallesdeproductorareza'>{skin.rarity}</p>
        <p className='detallesdeproductoprecio'>${skin.price}</p>
        <button onClick={() => addCarrito (id)}>Agregar al carrito</button>
      </div>
    </div>
    </>
    
  );
};