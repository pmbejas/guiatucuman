import React from "react";
import '../estilos/card-via.css'


export const CardVia = (props) => {
    return (
        <div className="contenedor-card-via">
            <div className="seccion-numero-via">
                <p>{(props.numero + 1)}</p>
            </div>
            <div className="seccion-nombre-via">
                <p className="nombre-via">{props.nombre}</p>
                <p className="subtitulo-via">{props.subtitulo}</p>
            </div>
            <div className="seccion-datos-via">
                <p>{props.largo}</p>
                <p>{props.categoria1}</p>
                <p className="strong">{props.categoria2}</p>
            </div>
        </div>
    )
}