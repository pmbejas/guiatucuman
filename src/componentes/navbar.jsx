import React, { useState, useEffect } from "react";
import { Boton } from './boton.jsx'
import { Link } from "react-router-dom";
import '../estilos/navbar.css'

export const NavBar = () => {
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const [zonas, setZonas] = useState([]);

    useEffect(() => {
        setError("");
        setZonas([]);
        const fetchZonas = async () => {
            setIsLoading(true)
            await fetch('/data/zonas.json')
                .then(response => response.json())
                .then(data => {
                    setZonas(data);
                }).catch(err => {
                    setError(err);
                })
            setIsLoading(false)
        }
        fetchZonas();
    }, []);
    
    if (isLoading) {
        return (
            <p>CARGANDO</p>
        )
    }

    if (error) {
        return (
            <p>ERROR: {error}</p>
        )
    }

    return (
        <nav className="barra-navegacion">
            <div className="seccion-barra barra1">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img className="logo"
                        alt="Guia de Escalada - Tafí del Valle"
                        src={require('../img/logo.png')} >
                    </img>
                </Link>
            </div>
            <div className="seccion-barra barra2">
                <div className="con-submenu">
                    <Link to="/guia" style={{ textDecoration: 'none' }}>
                        <div className="texto-menu">
                            <span className="">Guia</span>
                            <span className="texto-menu-small">▼</span>
                        </div>
                    </Link>
                    <div className="contenedor-submenu">
                        <div className="submenu">
                            { zonas && zonas.length> 0 && zonas.map((zona)=>
                                <Link to={`/guia/${zona.slug}`} style={{ textDecoration: 'none'}}>
                                    <p className="opciones-submenu">{zona.nombre}</p>
                                </Link>
                            )}
                        </div>  
                    </div>
                </div>
                <Link to="/proyecto" style={{ textDecoration: 'none' }}>
                    <div className="texto-menu">
                        <span className="">El proyecto</span>
                    </div>
                </Link>
                <Link to="/notas" style={{ textDecoration: 'none' }}>
                    <div className="texto-menu">
                        <span className="">Notas</span>
                    </div>
                </Link>
            </div>
            <div className="seccion-barra barra3">
                <Boton 
                    texto="Doná" />
                <a href="https://www.instagram.com/pablomartin2206"
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className="imagen-redes-sociales" 
                         src={require('../img/youtube.png')} 
                         alt="Canal de Youtube" />   
                </a>
                <a href="https://www.instagram.com/pablomartin2206"
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className="imagen-redes-sociales" 
                        src={require('../img/instagram.png')} 
                        alt="Pagina de Instagram" />
                </a>
            </div>
        </nav>
    );
}