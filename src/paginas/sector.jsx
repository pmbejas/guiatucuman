import React, { useEffect, useState } from "react";
import '../estilos/sector.css'
import { useParams, Link } from "react-router-dom";
import { CardVia } from '../componentes/card-via';
import { CardZona } from '../componentes/card-zona';
import  parse from "html-react-parser";

export const Sector = (props) => {
    const { slug } = useParams();
    const [error, setError] = useState(null);
    const [sector, setSector] = useState([]);
    const [otrosSectores, setOtrosSectores] = useState([]);

    useEffect(()=>{
        const getSector = () => {
            let sector = props.sectores.find(sector => sector.slug === slug);                    
            if (sector) {
                setSector(sector);
                console.log(sector.slugZona);
                let otrosSectores = props.sectores.filter(sectores => sectores.idZona === sector.idZona && sectores.id !== sector.id)
                setOtrosSectores(otrosSectores);
                setError("");
            } else {
                setError("Sector No encontrado");
            }
        }

        getSector();
    }, [slug,props]);

    return (
        <div className="contenedor">
            <div className="seccion-titulo-sector">
                <Link className="texto-link-sector" to={`/guia/${sector.slugZona}`}>
                    <p>{sector.nombreZona}</p>
                </Link>
                <h1>{sector.nombre}</h1>
                {error === "" &&  <p>{parse(sector.descripcion)}</p>}
                <a className="texto-link-sector" href="#como-llegar">Como llegar</a>
            </div>
            <div className="contenedor-contenido-zonas">
                <div className="seccion-vias-sector">
                    <div className="seccion-imagenes-vias-sector">
                        { sector.imagenSector && sector.imagenSector.length>0 && sector.imagenSector.map((item, index)=> (
                            <img src={require(`../img/zonas/imagen-sector-${item.nombreImagen}.png`)} alt="" />) 
                        )}
                    </div>
                    <div className="seccion-listado-vias-sector">
                        { sector.vias && sector.vias.length>0 && sector.vias.map((item, index)=><CardVia
                            numero={index}
                            nombre={item.nombre}
                            subtitulo={item.subtitulo}
                            largo={item.largo}
                            categoria1={item.categoria1}
                            categoria2={item.categoria2} /> )}
                    </div>
                </div>
                <div className="contenedor-seccion-acceso-sector" id="como-llegar">
                    <div className="seccion-acceso-sector">
                        {error === "" && <img src={require(`../img/zonas/mapa-${sector.imagenLlegar}.png`)} alt="" />}
                        <div className="seccion-texto-acceso-sector">
                            <h2>Como Llegar</h2>
                            {error === "" &&  <p>{parse(sector.llegar)}</p>}
                        </div>
                    </div>
                </div>
                <div className="seccion-sectores-sectores">
                    <h1>Otros Sectores</h1>
                    { error &&
                        <div className="seccion-card-sectores-sectores-error">
                            <h1>Aún no cargamos los otros sectores de esta zona</h1> 
                            <h1>En unos dias estará listo</h1> 
                        </div>
                    }
                    <div className="seccion-card-sectores-sectores">
                        { otrosSectores && otrosSectores.length>0 && otrosSectores.map((item)=><CardZona 
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
