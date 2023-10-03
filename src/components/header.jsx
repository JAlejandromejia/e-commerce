import React from 'react';
import { Ofertas } from './ofertas';



export const Header = () => {

  return (
    <div>
        <div className='mainheader'>
          <img src="https://images.hdqwalls.com/wallpapers/mercy-overwatch-pink-mercy-skin-4k-db.jpg" alt="Mercy Skin" />
          <h1>Bienvenido a Winton Wardrobe</h1>
          <p className='subtitle'>
          Tenemos la mejor coleccion de skins para Overwatch 2, echa un vistaso
          </p>
        </div>
        <hr />
        <Ofertas />
    </div>
  )
}
