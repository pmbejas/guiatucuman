import React from "react";
import '../estilos/card-objeto.css'

export const CardObjeto = (props) => {
    return (
        <div className="contenedor-objeto">
            <img 
            src={require(`../img/${props.imagen}.png`)} 
            alt="Foto del Objeto" />
            <div className="texto-contenedor-objeto">
                <p>{props.nombre}</p>
                <h2>{props.cantidad}</h2>
            </div>
        </div>
    );
}