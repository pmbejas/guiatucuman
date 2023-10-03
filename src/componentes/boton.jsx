import React from "react";
import '../estilos/boton.css'

export const Boton = (props) => {
    return (
        <button className={"boton "+props.color}>
            <span className="texto-boton">
                {props.texto}
            </span>
        </button>
    );
}