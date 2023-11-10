import React from "react";
import { Link } from "react-router-dom";
import  parse from "html-react-parser";
import '../estilos/card-zona.css'

export const CardZona = (props) => {
    return (
        <div className="contenedor-card-zona">
            {<img src={require(`../img/zonas/${props.imagen}.jpg`)}
                alt="" />}
            <div className="contenedor-h3-link">
                <Link to={`/guia/${props.slug}`} style={{ textDecoration: 'none' }}>
                    <h3 className="h3-link">{props.nombre}</h3>
                </Link>
            </div>
            <p>{parse(props.subtitulo)}</p>
        </div>
    );
}