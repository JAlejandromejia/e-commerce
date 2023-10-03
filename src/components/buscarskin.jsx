import React from 'react';
import { useParams } from 'react-router-dom';

export const Buscarskin = ({ products }) => {
  // Obtén el parámetro de la URL que corresponde al ID de la skin
  const { id } = useParams();

  // Encuentra la skin específica por su ID
  const skin = products.find(product => product.id === Number(id));

  if (!skin) {
    return <div>No se encontró la skin</div>;
  }

  return (
    <div>
      <h2>Detalles de la Skin</h2>
      <img src={skin.urlImage} alt={skin.nameproduct} />
      <p>{skin.nameproduct}</p>
      <p>{skin.hero}</p>
      <p>{skin.rarity}</p>
      <p>${skin.price}</p>
    </div>
  );
};