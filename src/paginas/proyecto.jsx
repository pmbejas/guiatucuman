import React from "react";
import '../estilos/proyecto.css';

export const Proyecto = () => {
    return (
        <div className="contenedor">
            <div className="seccion-titulo-proyecto">
                <h1>El Proyecto</h1>
            </div>
            <div className="contenedor-contenido-proyecto">
                <div className="contenido-proyecto">
                    <div className="contenedor-texto-proyecto">
                        <div className="texto-foto-proyecto">
                            <div>
                                <img 
                                    className="imagen-proyecto"
                                    src={require("../img/proyecto/proyecto.webp")} 
                                    alt="Imagen del Proyecto" />
                                <p>
                                    La <strong>Guía de Escalada Tafí del Valle</strong> es un proyecto sin fines de lucro originado por Juan de la Canal y Gaspar Laprida con la colaboración de muchas otras personas, instituciones y empresas.
                                </p>
                                <p>
                                    Nuestra misión con este proyecto es no solamente brindar la información necesaria sobre las vías y los sectores para que quienes no conocen puedan llevar adelante sus actividades de la mejor manera posible – sino también ser una fuente de ingresos para el mantenimiento y desarrollo de los sectores de escalada de la zona.
                                </p>
                                <p>
                                    Es por esto que todo lo recaudado con la guía está destinado a la compra de material como anclajes (chapas, descuelgues y parabolts) y otros materiales necesarios (mechas de taladro, cepillos, sika, etc) y ninguno de lo autores o colaboradores del proyecto recibe ningún beneficio económico.
                                </p>
                            </div>
                        </div>
                        <div className="texto-pie-proyecto">
                            <p>
                                El material de la guía está a disposición de todo aquel que quiera hacer uso del mismo en sectores de San Martín de los Andes (dónde no haya ningún problema de acceso) siempre y cuando cuente con la experiencia necesaria para equipar o re-equipar una ruta (título de equipador de roca de FASA o experiencia comprobable en apertura de vías).
                            </p>
                            <p>
                                Todo el material que se compre con los ingresos de la guía está publicado en este sitio.
                            </p>
                        </div>
                        <div className="separador-proyecto"></div>
                        <div className="texto-creadores-proyecto">
                            <h2>Autores</h2>
                            <p>
                                Ulises Kusnesov
                            </p>
                            <h2>Agradecimientos</h2>
                            <p>
                                Jano y Maxi Gutierrez, Juli Casanova, Pablo Dominguez, Tiani Ezcurra, Maxi Artoni, Simón de la Canal, Ezequiel Laprida, Simón Laprida, Martín Cornaló, Hernán Signorini, Mariano Laprida, Angel de la Canal, Maxi Vasquez, Javi Trama, Flor Mancini, Daniel Mancini, Claudio Ricci, Leo Tudanca, Esteban Degregori, Diego Nakamura, Eliseo Miciu, Leo Guevara, Leo Koller, Juan Pedalino, Lula Tiemroth, Martín Ricau, Martín Bisi, Manu Parada, Nico Fuentes, Walter Lucas, Santi Valerga, Lucas Avila, Mimi Amarillo, José Laprida, Pablo Piccone, Javier Wehncke.
                            </p>
                            <h2>Apoyan Este Proyecto</h2>
                            <p>Me apoyan?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}