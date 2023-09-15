import React from 'react';
import '../estilos/cardsugerencia.css';
import checkSquare from '../img/guia/warning-sign-triangle.png';

export const CardSugerencia = (props) => {
  return (
    <div className="contenedor-card-sugerencia">
        <img 
            className="contenedor-card-sugerencia--img"
            src={checkSquare} 
            alt="Check Square"
        />
        <p>
            {props.texto}
        </p>
    </div>
  )
}
