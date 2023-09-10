import React, { useEffect } from "react";
import '../estilos/guia.css'

import { CardZona } from '../componentes/card-zona';

export const Guias = (props) => {
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="contenedor">
            <div className="seccion-titulo-guias">
                <h1>Guia Online</h1>
                <p>
                    En el Departamento de <strong>Tafí del Valle</strong> existen alrededor de 150 vías de escalada distribuidas en 8 sectores principales. 
                </p>
                <p>
                    El Rincón y Los Corpitos concentran la mayor cantidad de vías y gran variedad de grados (entre 5to y 8vo).
                </p>
                <p>
                    La escalada es practicada por arriba de los 2000 m.s.n.m., pudiendo llegar a los 2900 msnm en el Infiernillo, e incluso superar ampliamente los 3000 msnm en la Quebrada del Barón. La mayoría de estos sectores se encuentran en los faldeos del Cerro Munoz y, cabe destacar que en general las vías suelen ser cortas, por lo que una cuerda de 60 mts es suficiente para poder practicar este hermoso deporte.
                </p>
                <p>
                    Por último, si bien es posible escalar durante todo el año, se debe tener en cuenta las altas precipitaciones durante épocas estivales, y el frío considerable en época invernales.  se puede colocar las temperaturas max y mínimas y mencionar que en el valle el clima es un poco inestable no así en el sector de Los Corpitos 
                </p>
            </div>
{/*             <div className="seccion-sugerencias-guias">
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
            </div> */}
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
