import React, { useEffect } from "react";
import '../estilos/proyecto.css';
import fotoProyecto from '../img/proyecto/nosotros.jpg';
import fotoTafi from '../img/proyecto/tafidelvalle.jpg';

export const Proyecto = () => {

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);


    return (
        <div className="contenedor">
            <div className="seccion-titulo-proyecto">
                <h1>Sobre Nosotros</h1>
            </div>
            <div className="contenedor-contenido-proyecto">
                <div className="contenido-proyecto">
                    <div className="contenedor-texto-proyecto">
                        <div className="texto-foto-proyecto">
                            <div>
                                <img 
                                    className="imagen-proyecto"
                                    src={fotoProyecto} 
                                    alt="Imagen del Proyecto" />
                                <p>
                                    Esta guía virtual es realidad gracias a las gestiones y trabajo de la Asociacion Argentina de Montaña (A.A.M.), junto con la ayuda de escaladores de la comunidad local. Surge debido a la necesidad de poseer una guía actualizada constantemente, sobre todo luego del descubrimiento y equipada del sector Los corpitos, el último en abrirse. La alta motivación de algunos escaladores por equipar y desarrollar un nuevo lugar de escalada, fue el disparador  que nos mostró la necesidad de  poseer toda la información en un solo lugar y de manera ordenada. 
                                </p>
                                <p>
                                    La AAM es un club de montañismo y escalada con sede en Yerba Buena, Tucumán y que posee entre sus bases fundacionales, el deseo de promover y desarrollar ambas actividades. Esta guía nos acerca un poco más a lograr ese objetivo. 
                                </p>
                                <p>
                                    Invitamos a nuestros comprovincianos como así también a quienes nos visiten de otras provincias, a que disfruten  y hagan  uso de esta guía gratuita. Para cualquier sugerencia se solicita comunicarse al siguiente mail.
                                </p>
                                <p>
                                    No se puede dejar de agradecer, a quienes dedican su tiempo, dinero y esfuerzo para el equipe de nuevas vías, como así también, a quienes aportan a la causa con una ayuda económica.
                                </p>
                                <p>
                                    Cabe destacar que esta guía no sería realidad sin el gran aporte de Pablo Bejas, como así también, sin el aporte de información de quienes nos precedieron en el armado de guías previas, teniendo como referencia la creada en el año 2018 por Matias Rohmer y Andres Quiroga
                                </p>
                            </div>
                        </div>
                        <div className="separador-proyecto"></div>
                        <div className="contenedor-imagen-proyecto">
                            <img className="imagen-pie-proyecto"  src={fotoTafi} alt="Foto Tafi del Valle" srcset="" />
                        </div>
                        <div className="texto-creadores-proyecto">
                            <h2>Agradecimientos</h2>
                            <p>
                                A quienes nos precedieron y armaron las guías previas:
                                Matias Rohmer, Andres Quiroga, Roberto Sanchez, Ulises Saini, Victoria Salvadeo, Jose Gongora……
                            </p>
                            <p>
                                A quienes trabajaron para hacer realidad este proyecto: Pablo Bejas, Jimena Bulacio, Victoria Salvadeo, Aylen Martinez, Ulises Saini, Emiliano Soria Mansilla, Mariano y, Ulises Kusnezov
                            </p>
                            <p>
                                Y por ultimo, a todos los socios de la AAM, por su aporte constante al club.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}