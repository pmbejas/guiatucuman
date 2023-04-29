import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import '../estilos/guia.css'

import { CardZona } from '../componentes/card-zona';

export const Guias = () => {
    const [data,setData]=useState([]);
    const [error, setError]=useState(null);
    const getData = async ()=>{
        await fetch('../data/zonas.json')
            .then( response => response.json())
            .then(datos => {
                    setData(datos)
            })
            .catch (err => {
                setError(err);
            });
    }

    useEffect(()=>{
      getData()
    },[])
    
    if (error) {
        return (
            <div className="contenedor">
                <div className="seccion-titulo-guias">
                    <h1>Guia Online</h1>
                    <p>
                        ERROR: {error.message} 
                    </p>
                </div>
            </div> 
        )
    }

    return (
        <div className="contenedor">
            <div className="seccion-titulo-guias">
                <h1>Guia Online</h1>
                <p>
                    En <strong>Tafi del Valle</strong> hay más de 200 vías de escalada deportiva distribuidas en 8 zonas principales, de las cuales 3 se encuentran dentro del Parque Nacional Lanín. Contamos con variedad de grados y estilos de escalada debido a los diferentes tipos de roca.
                </p>
                <p>
                    También se puede escalar en los muros del Club Lacar y Club Embajador de los Andes.
                </p>
            </div>
            <div className="seccion-sugerencias-guias">
                <h1>Aclaraciones y sugerencias</h1>
                <div className="seccion-alerta-guias">
                    <div className="seccion-alerta-contenido-guias">
                        <h1>⚠️</h1>
                        <p><span>La escalada es un deporte de riesgo</span>. Se necesitan los conocimientos, material, entrenamiento y experiencia suficientes para ser autónomos y críticos acerca de qué vía escalar o cuál no. Se recomienda a los principiantes realizar la actividad con una persona experimentada y debidamente calificada. </p>
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
                    { data && data.length>0 && data.map((item)=>
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
