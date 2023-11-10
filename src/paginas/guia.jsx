import React, { useEffect } from "react";
import '../estilos/guia.css'
import mapaGeneral from '../img/guia/mapaGeneral.jpg';
import mapaInfiernillo from '../img/guia/mapaInfiernillo.jpg';
import mapaValle from '../img/guia/mapaValle.jpg';
import { CardZona } from '../componentes/card-zona';
import superioLateral from '../img/guia/superiorLateral.jpg';

export const Guias = (props) => {
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="contenedor">
            <div className="seccion-titulo-guias d-flex row">
                <h1 className="col-12">Guia Online</h1>
                <div className="col-6 seccion-titulo-guias--texto">
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
                        Por último, si bien es posible escalar durante todo el año, se debe tener en cuenta las altas precipitaciones durante épocas estivales y el frío considerable en época invernales, siendo el clima en la zona del infiernillo mas estable que en el Valle.
                    </p>
                </div>
                <div className="col-5 seccion-titulo-guias--imagen text-center align-items-center">
                    <img className="imagen-titulo-guia" src={superioLateral} alt="Imagen Guía Escalada" />
                </div>
            </div>
            <div className="seccion-zonas-escalada-guias">
                <h1>Zonas de Escalada</h1>
                <div className="d-flex row gap-3 mt-3 justify-content-center mb-3">
                    <img className="col-3 imagen-mapa" src={mapaGeneral} alt="Mapa General" />
                    <img className="col-3 imagen-mapa" src={mapaInfiernillo} alt="Mapa General" />
                    <img className="col-3 imagen-mapa" src={mapaValle} alt="Mapa General" />
                </div>
                <div className="seccion-card-zonas mb-4">
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
