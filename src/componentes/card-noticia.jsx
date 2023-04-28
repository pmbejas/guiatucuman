import React from "react";
import '../estilos/card-noticia.css'

export const CardNoticia = (props) => {
    return (
        <div className="contenedor-card-noticia">
            <img src={require(`../img/imagen-${props.imagen}.png`)}
                alt="" />
            <span>{props.fecha}</span>
            <h3>{props.titulo}</h3>
            <p>{props.contenido}</p>
        </div>
    );
}