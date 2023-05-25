import React from 'react';
import { Link } from "react-router-dom";
import '../estilos/guia.css'

import { CardZona } from '../componentes/card-zona';

export const Guias = (props) => {
    return (
        <div className="contenedor">
            <div className="seccion-titulo-guias">
                <h1>Guia Online</h1>
                <p>
                    En <strong>Tafi del Valle</strong> hay casi 150 vías de escalada distribuidas en 7 sectores, entre los que se destacan particularmente 2 de ellos, El Rincon y Los Corpitos, debido a que son los que aglomeran la mayor cantidad de vias. El resto de los sectores se encuentran distribuidos a lo largo del valle y en la zona del Abra del Infiernillo.
                </p>
                <p>
                    Toda la escalada es practicada por arriba de los 2000 mts de altitud, pudiendo llegar a los 2900 en el Infiernillo e incluso superar ampliamente los 3000 mt en la Quebrada del Baron. La mayoria de éstos se encuentran en los faldeos del Cerro Muñoz
                </p>
            </div>
            <div className="seccion-sugerencias-guias">
                <h1>Aclaraciones y sugerencias</h1>
                <div className="seccion-alerta-guias">
                    <div className="seccion-alerta-contenido-guias">
                        <div className="seccion-alerta-contenido-guias-titulo">
                            <h1>⚠️</h1>
                            <p><span>La escalada es un deporte de riesgo</span>.</p>
                        </div>
                        <p>Se necesitan los conocimientos, material, entrenamiento y experiencia suficientes para ser autónomos y críticos acerca de qué vía escalar o cuál no. Se recomienda a los principiantes realizar la actividad con una persona experimentada y debidamente calificada. </p>
                        <div className="link-alerta-guias">
                            <Link to="/guias-titulados" style={{ textDecoration: 'none' }}>
                                Ver Guías Titulados
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="seccion-alerta-card-informacion">
                    <div className="contenedor-alerta-card-informacion">
                        <img 
                            src={require('../img/aclaracion-img1.png')}
                            alt="" />
                        <p>
                            Escalar y dar seguro con casco te puede salvar la vida o la de tu compañero, al igual que conocer y saber usar correctamente el material. Escalemos responsablemente.
                        </p>
                    </div>
                    <div className="contenedor-alerta-card-informacion">
                        <img 
                            src={require('../img/aclaracion-img2.png')}
                            alt="" />
                        <p>
                            Todas las vías están graduadas de acuerdo a la escala Francesa. El grado es una cuestión subjetiva y cada uno puede sentir la dificultad de la ruta de manera diferente.
                        </p>
                    </div>
                    <div className="contenedor-alerta-card-informacion">
                        <img 
                            src={require('../img/aclaracion-img3.png')} 
                            alt="" />
                        <p>
                            No acampar ni hacer fuego en lugares que no estén específicamente habilitados. Por favor no dejar residuos. Cuidemos nuestros sectores de escalada.
                        </p>
                    </div>
                </div>
                <div className="separador-guias"></div>
            </div>
            <div className="seccion-zonas-escalada-guias">
                <h1>Zonas de Escalada</h1>
                <img 
                    src={require('../img/mapa-zonas.png')}
                    alt="Mapa de la Zona" />
                <div className="seccion-card-zonas">
                    { props.zonas && props.zonas.length>0 && props.zonas.map((item)=>
                        <CardZona
                            key={item.id}
                            imagen={item.imagen}
                            nombre={item.nombre}
                            slug={item.slug}
                            subtitulo={item.subtitulo}
                        /> )
                    }
                </div>
            </div>
            
        </div>
    );
}
