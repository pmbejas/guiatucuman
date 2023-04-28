import React from "react";
import { Link } from "react-router-dom";
import '../estilos/card-zona.css'

export const CardZona = (props) => {
    return (
        <div className="contenedor-card-zona">
            {<img src={require(`../img/zonas/${props.imagen}.png`)}
                alt="" />}
            <div className="contenedor-h3-link">
                <Link to={`/guias/${props.slug}`} style={{ textDecoration: 'none' }}>
                    <h3 className="h3-link">{props.nombre}</h3>
                </Link>
            </div>
            <p>{props.linea1}</p>
            <p>{props.linea2}</p>
            <p>{props.linea3}</p>
        </div>
    );
}