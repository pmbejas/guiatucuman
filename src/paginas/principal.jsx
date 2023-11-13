import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../estilos/principal.css'
import { Boton } from "../componentes/boton";
import { CardSugerencia } from "../componentes/CardSugerencia";
import foto1 from '../img/principal/principal1.jpg'
import fotoLateral from '../img/principal/lateralSuperior.jpg';
export const Principal = () => {
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

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
                        Bienvenidos a la Guía de Escalada deportiva de la provincia de Tucuman, Argentina. 
                    </p>
                    <p>
                        Actualmente, esta actividad se encuentra en pleno crecimiento, como en casi todo el norte argentino, gracias a la motivación y compromiso de escaladores, equipadores, escuelas de escalada local y la Asociación Argentina de Montaña (AAM) quienes mediante diversas iniciativas continúan promoviendo el deporte.
                    </p>
                    <p>
                        En la presente encontrarás no solo información técnica de los sectores y sus vías sino además, aspectos fundamentales sobre cómo desplazarte de manera segura en un ambiente de montaña, donde es preciso  conservar y proteger la biodiversidad en pos de lograr el desarrollo  de una actividad deportiva en armonía con el ambiente.
                    </p>
                    <p>
                        En Tucumán, la escalada se encuentra concentrada en el Dpto. Tafi del Valle, más precisamente en el valle homónimo, y en la zona del Abra del Infiernillo.
                    </p>
                    <Link to="/guia" style={{ textDecoration: 'none' }}>
                        <Boton className="boton" texto="Guia Online" color="celeste"/>
                    </Link>
                </div>
                <div className="contenedor-mitad">
                    <img className="contenedor-mitad-foto mb-4 mb-md-0" src={fotoLateral} alt="" />
                </div>
            </div>

            
            <div className="seccion-medio">
                <div className="seccion-sugerencias-guias">
                    <h1>Aclaraciones y sugerencias</h1>
                    <div className="seccion-alerta-guias">
                        <div className="seccion-alerta-contenido-guias">
                            <div className="seccion-alerta-contenido-guias-titulo">
                                <h1>⚠️</h1>
                                <p><span>La escalada es un deporte de riesgo</span>.</p>
                            </div>
                            <p>
                                Los autores de la presenta guia no son responsables del uso incorrecto de la misma, como tampoco de los incidentes o accidentes que puedan ocurrir practicando la actividad. La escalada es un deporte de riesgo y esta  guia debe usarse solamente como fuente de informacion recayendo la responsabilidad y la seguridad de la escalada, en quienes la practiquen.
                            </p>
                        </div>
                        <div className="seccion-alerta-card-informacion">
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion bg-light-blue"
                                texto="Se debe  utilizar casco tanto para escalar como para dar seguro." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Se recomienda el chequeo cruzado antes de empezar a escalar." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Aprender bien las maniobras, técnica correcta de progresión, colocación de protección y uso del equipo." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Se debe bajar rapelando todas las vías, para alargar la vida de los descuelgues. Es fundamental conocer las maniobras de rappel y descenso. Prestar atención al momento de realizarlas." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="En general los descuelgues poseen dos argollas, aunque es posible encontrase con algún maillon. Se pide dejarlos allí y no llevarlos." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="En los sectores más nuevos, se recomienda mantenerse en la línea de chapas y tener precaución con las rocas sueltas." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Para la mayor parte del año, se sugiere tener un buen abrigo en la mochila." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Por sobre los 3000 msnm se debe tener en cuenta los posibles Sx y St del mal de altura." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Llevar suficiente agua y protegerse del sol." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Es aconsejable utilizar el casco en ciertas aproximaciones caminando." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="La escalada transcurre en lugares alejados y donde la ayuda no inmediata. Se recomienda tener conocimientos básicos de primeros auxilios." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Se utiliza la escala de graduación francesa. Los grados son subjetivos y queda a criterio de cada uno saber escoger correctamente la línea a escalar." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="En general las vías son cortas y no superan los 20mt, por lo que una cuerda de 60mt es suficiente para escalar todas las vías. Aun así, se recomienda realizar siempre un nudo en las puntas de la cuerda." />
                        </div>
                        <div className="contenedor-principal-fotos">
                            <img className="seccion-alerta-foto mt-3" src={foto1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="seccion-sugerencias-guias">
                    <h1>Cuidado del Lugar</h1>
                    <div className="seccion-alerta-guias bg-green">
                        <div className="seccion-alerta-contenido-guias bg-green">
                            <div className="seccion-alerta-contenido-guias-titulo bg-green">
                                <h1>⚠️</h1>
                                <p><span>Cuidar y Respetar la Naturaleza</span>.</p>
                            </div>
                            <p>
                                Se pide encarecidamente practicar las normas de bajo impacto, dejando las montañas más limpias que como las encontramos y moviéndonos en ellas con el máximo respeto hacia la flora y fauna local.
                            </p>
                        </div>
                        <div className="seccion-alerta-card-informacion bg-green">
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Cuidar la naturaleza y conservación del medio." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Respetar las sendas marcadas para minimizar el impacto." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Si hay presencia de nidos, cerca o en la línea de la vía de escalada, no escalarla." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Prohibido hacer fuego: son  zonas muy secas con poca humedad y suele correr viento; por lo cual, una pequeña ignición puede provocar un incendio forestal." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No poner música que perturbe en la zona de escalada." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Acampar en las zonas definidas." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="En las paredes, también pueden encontrarse con Chinchillones; no asustarlos en caso de ver uno." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Si vemos presencia de corrales, no ocuparlos." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No desmalezar." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No llevarse objetos, ni rocas, ni plantas, ni flores, etc." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No asistir al lugar con mascotas, como por ejemplo perros." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No tirar basura orgánica (restos de frutas o verduras, por ejemplo)." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No tirar residuos plásticos, cintas, ni papeles, ni cartones, ni latas." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="No tirar colillas de cigarrillos." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="La basura vuelve a casa." />
                            <CardSugerencia 
                                className="contenedor-alerta-card-informacion"
                                texto="Los papeles que usas para ir al baño, llevárselos en una bolsa de residuo." />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}