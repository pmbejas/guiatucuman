import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  parse from "html-react-parser";

import { Boton } from '../componentes/boton';
import { CardZona } from "../componentes/card-zona";


import '../estilos/zona.css';

export const Zona = (props) => {
    const {slug} = useParams();
    const [zonas, setZonas] = useState({});
    const [sectores, setSectores] = useState([]);
    const [error, setError]=useState(null);
    const [errorSectores, setErrorSectores]=useState(null);
    
    useEffect(()=>{
        setSectores([]);
        const fetchSectores = async (id) => {
            let sectores = props.sectores.filter(sector => sector.idZona === id);
            if (sectores && sectores.length>0) {
                setSectores(sectores);
            } else {
                setErrorSectores("No se encontraron sectores en esta zona");
            }
        }

        const fetchZona = async () => {
            let zona = props.zonas.find(zona => zona.slug === slug);
            if (zona) {
                setZonas(zona);
                fetchSectores(zona.id);
                setError("")
            } else {
                setError("Zona no encontrada")
            }
        }

        fetchZona();
    }, [slug, props]);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="contenedor">
            <div className="seccion-titulo-zonas">
                <h1>{zonas.nombre}</h1>
                {error === "" &&  <p>{parse(zonas.descripcion)}</p>}
            </div>
            <div className="contenedor-contenido-zonas">
                <div className="seccion-acceso-zonas">
                    {error === "" && <img src={require(`../img/zonas/mapa-${slug}.jpg`)} alt="" />}
                    <div className="seccion-texto-acceso-zonas">
                        <h2>Como Llegar</h2>
                        {error === "" &&  <p>{parse(zonas.llegar)}</p>}
                        
                        <div className="boton-maps">
                            {zonas.googleMaps!=="" && 
                                <a href={zonas.googleMaps} target="_blank" rel="noreferrer noopener">
                                <Boton texto="Google Maps" color="celeste"/>
                                </a>
                            }
                            {zonas.trackWikiloc!=="" &&
                               <a href={zonas.trackWikiloc} target="_blank" rel="noreferrer noopener">
                                    <Boton texto="Track Wikiloc" color="verde"/>
                                </a>
                            }
                            {zonas.archivoGPX!=="" &&
                            <a href={zonas.googleMaps} target="_blank" rel="noreferrer noopener">
                                <Boton texto="Archivo GPX" color="gris"/>
                            </a>
                            }
                        </div>
                        <h2>Zona de Acampe</h2>
                        {error === "" &&  <p>{parse(zonas.sectorAcampe)}</p>}
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
