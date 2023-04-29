import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  parse from "html-react-parser";

import { Boton } from '../componentes/boton';
import { CardZona } from "../componentes/card-zona";


import '../estilos/zona.css';

export const Zona = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {slug} = useParams();
    const [zonas, setData] = useState({});
    const [error, setError] = useState(null);
    const [sectores, setSectores] = useState([]);
    const [errorSectores, setErrorSectores] = useState(null);
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    
    useEffect(()=>{
        setErrorSectores("");
        setSectores([]);
        const fetchSectores = async (id) => {
            setIsLoading(true)
            await fetch('../data/sectores.json')
                .then(response => response.json())
                .then(data => {
                    let sectores = data.filter(sector => sector.idZona === id);
                    if (sectores && sectores.length>0) {
                        setSectores(sectores);
                    } else {
                        setErrorSectores("No se encontraron sectores en esta zona");
                    }
                })
                .catch (err => {
                    setErrorSectores("Error en la lectura del Archivo");
                });
            setIsLoading(false)
        }

        const fetchData = async () => {
            setIsLoading(true)
                await fetch('../data/zonas.json')
                .then( response => response.json())
                .then(data => {
                    let zona = data.find(zona => zona.slug === slug);
                    if (zona) {
                        setData(zona);
                        fetchSectores(zona.id);
                        setError("")
                    } else {
                        setError("Zona no encontrada")
                    }
                }).catch (err => {
                    setError(err)
                });
            setIsLoading(false)
        }

        fetchData();
    }, [slug]);

    if (isLoading) {
        return (
            <div className="seccion-titulo-zonas">
                <h1>CARGANDO DATOS</h1>
            </div>
        )
    }
    
    if (error) {
        return (
            <div className="contenedor">
                <div className="seccion-titulo-zonas error">
                    <h1>ERROR</h1>
                    <h1>{error}</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="contenedor">
            <div className="seccion-titulo-zonas">
                <h1>{zonas.nombre}</h1>
                {error === "" &&  <p>{parse(zonas.descripcion)}</p>}
            </div>
            <div className="contenedor-contenido-zonas">
                <div className="seccion-acceso-zonas">
                    {error === "" && <img src={require(`../img/zonas/mapa-${slug}.png`)} alt="" />}
                    <div className="seccion-texto-acceso-zonas">
                        <h2>Como Llegar</h2>
                        {error === "" &&  <p>{parse(zonas.llegar)}</p>}
                        <div className="boton-maps">
                            <Boton texto="Abrir en Google Maps" />
                        </div>
                    </div>
                </div>
                <div className="seccion-sectores-zonas">
                    <h1>Sectores</h1>
                    { errorSectores &&
                        <div className="seccion-card-sectores-zonas-error">
                            <h1>Aún no cargamos los sectores de esta zona</h1> 
                            <h1>En unos dias estará listo</h1> 
                        </div>
                    }
                    <div className="seccion-card-sectores-zonas">
                        { sectores && sectores.length>0 && sectores.map((item)=><CardZona 
                            imagen={item.imagen}
                            nombre={item.nombre}
                            slug={"sectores/"+item.slug}
                            subtitulo={item.subtitulo}/> )
                        }
                </div>
                </div>
            </div>
        </div>
    )
}
