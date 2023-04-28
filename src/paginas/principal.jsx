import React from "react";
import '../estilos/principal.css'

import { Boton } from "../componentes/boton";
import { CardNoticia } from "../componentes/card-noticia";
import { CardObjeto } from "../componentes/card-objeto";

export const Principal = () => {
    return (
        <div className="contenedor">
            <div className="seccion-superior">
                <div className="contenedor-mitad">
                    <h1>
                        Guía de Escalada
                    </h1>
                    <h1>
                        Tafí del Valle
                    </h1>
                    <p>
                        En Tafí del Valle hay más de 200 vías de escalada distribuidas en 8 zonas principales, de las cuales 3 se encuentran dentro del Parque Nacional Lanín. Contamos con variedad de grados y estilos de escalada debido a los diferentes tipos de roca.
                    </p>
                    <p>
                        Toda la recaudación de la guía es destinada a la compra de anclajes para el mantenimiento y apertura de nuevas vías.
                    </p>
                    <Boton texto="Guia Online" />
                </div>
                <div className="contenedor-mitad">
                    <img src={require("../img/img-phone-escalada.png")} 
                         alt="Foto" />
                </div>
            </div>
            <div className="seccion-medio">
                <div className="seccion-logros">
                    <p>A TRAVÉS DE ESTE PROYECTO HEMOS CONSEGUIDO</p>
                    <div className="seccion-objetos-logros">
                        <CardObjeto 
                            imagen="chapas"
                            nombre="Chapas"
                            cantidad="696"
                        />
                        <CardObjeto 
                            imagen="parabolts"
                            nombre="Parabolts"
                            cantidad="743"
                        />
                        <CardObjeto 
                            imagen="chapa-argolla"
                            nombre="Chapas con argolla"
                            cantidad="146"
                        />
                    </div>
                </div>
                <div className="seccion-noticias">
                    <h1>Últimas Novedades</h1>
                    <div className="seccion-card-noticias">
                        <CardNoticia
                            imagen="nota-1"
                            fecha="01/01/2023"
                            titulo="Lanzamiento del Sitio de Guias de Tafi del Valle"
                            contenido="Se lanzó el nuevo sitio de la Asociacion Argentina de Montaña, en donde vas a encontrar toda la informacion de los lugares para hacer escaladas." />
                        <CardNoticia
                        imagen="nota-1"
                        fecha="01/01/2023"
                        titulo="Lanzamiento del Sitio de Guias de Tafi del Valle"
                        contenido="Se lanzó el nuevo sitio de la Asociacion Argentina de Montaña, en donde vas a encontrar toda la informacion de los lugares para hacer escaladas. Lanzamiento del Sitio de Guias de Tafi del Valle. Se lanzó el nuevo sitio de la Asociacion Argentina de Montaña, en donde vas a encontrar toda la informacion de los lugares para hacer escaladas." />
                        <CardNoticia
                            imagen="nota-1"
                            fecha="01/01/2023"
                            titulo="Lanzamiento del Sitio de Guias de Tafi del Valle"
                            contenido="Se lanzó el nuevo sitio de la Asociacion Argentina de Montaña, en donde vas a encontrar toda la informacion de los lugares para hacer escaladas." />
                    </div>
                </div>
            </div>
        </div>
    );
}