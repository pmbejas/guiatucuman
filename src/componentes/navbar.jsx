import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../estilos/navbar.css'
import logoAAM from '../img/iconos/logoAAM.svg'

export const NavBar = (props) => {
    const [zonas, setZonas] = useState([]);

    const handleClickMenu = () => {
        const iconoHamburger = document.getElementById('iconHamburger');
        iconoHamburger.classList.toggle('ocultar');
        const iconoX = document.getElementById('iconX');
        iconoX.classList.toggle('ocultar');
        const menuMovil = document.getElementById('menuMovil');
        menuMovil.classList.toggle('ocultar');
    }

    useEffect(() => {        
        setZonas(props.zonas);
    }, [props.zonas]);

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
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="texto-menu">
                        <span className="">Inicio</span>
                    </div>
                </Link>
                <div className="con-submenu">
                    <Link to="/guia" style={{ textDecoration: 'none' }}>
                        <div className="texto-menu">
                            <span className="">Guia</span>
                            <span className="texto-menu-small">▼</span>
                        </div>
                    </Link>
                    <div className="contenedor-submenu">
                        <div className="submenu">
                            { zonas && zonas.length> 0 && zonas.map((zona, key)=>
                                <Link key={key} to={`/guia/${zona.slug}`} style={{ textDecoration: 'none'}}>
                                    <p className="opciones-submenu">{zona.nombre}</p>
                                </Link>
                            )}
                        </div>  
                    </div>
                </div>
                <Link to="/proyecto" style={{ textDecoration: 'none' }}>
                    <div className="texto-menu">
                        <span className="">Nosotros</span>
                    </div>
                </Link>
                {/* <Link to="/notas" style={{ textDecoration: 'none' }}>
                    <div className="texto-menu">
                        <span className="">Notas</span>
                    </div>
                </Link> */}
            </div>
            <div className="seccion-barra barra3">
                {/* <Boton 
                    texto="Doná" /> */}
                <a href="https://www.aamtuc.org"
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className="imagen-redes-sociales logoAAM" 
                         src={logoAAM}
                         alt="Canal de Youtube" />   
                </a>
                <a href="https://www.youtube.com/@asociacionargentinademonta9143"
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className="imagen-redes-sociales" 
                         src={require('../img/youtube.png')} 
                         alt="Canal de Youtube" />   
                </a>
                <a href="https://www.instagram.com/aam_tucuman"
                   target="_blank"
                   rel="noreferrer noopener">
                    <img className="imagen-redes-sociales" 
                        src={require('../img/instagram.png')} 
                        alt="Pagina de Instagram" />
                </a>
            </div>
            <div className="barraMovil">
                <img 
                    className="hamburger"
                    id="iconHamburger"
                    onClick={handleClickMenu}
                    src={require("../img/iconos/hamburger.png")}
                    alt="Hamburger Icon"/>
                <img 
                    className="menu-x ocultar"
                    id="iconX"
                    onClick={handleClickMenu}
                    src={require("../img/iconos/menu-x.png")}
                    alt="Hamburger Icon"/>
                
                <div className="barraMovilMenu ocultar" id="menuMovil" onClick={handleClickMenu}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="texto-menu">
                            <span className="">Inicio</span>
                        </div>
                    </Link>

                    <div className="con-submenu">
                        <Link to="/guia" style={{ textDecoration: 'none' }}>
                            <div className="texto-menu">
                                <span className="">Guia</span>
                                <span className="texto-menu-small">▼</span>
                            </div>
                        </Link>
                        <div className="contenedor-submenu">
                            <div className="submenu">
                                { zonas && zonas.length> 0 && zonas.map((zona, key)=>
                                    <Link key={key} to={`/guia/${zona.slug}`} style={{ textDecoration: 'none'}}>
                                        <p className="opciones-submenu">{zona.nombre}</p>
                                    </Link>
                                )}
                            </div>  
                        </div>
                    </div>
                    <Link to="/proyecto" style={{ textDecoration: 'none' }}>
                        <div className="texto-menu">
                            <span className="">Nosotros</span>
                        </div>
                    </Link>
                    <div className="">
                        <a href="https://www.aamtuc.org"
                            target="_blank"
                            rel="noreferrer noopener">
                            <img className="imagen-redes-sociales logoAAM" 
                                src={logoAAM}
                                alt="Canal de Youtube" />   
                        </a>
                        <a href="https://www.youtube.com/@asociacionargentinademonta9143"
                            target="_blank"
                            rel="noreferrer noopener">
                            <img className="imagen-redes-sociales ms-2 me-2" 
                                src={require('../img/youtube.png')} 
                                alt="Canal de Youtube" />   
                        </a>
                        <a href="https://www.instagram.com/aam_tucuman"
                            target="_blank"
                            rel="noreferrer noopener">
                            <img className="imagen-redes-sociales" 
                                src={require('../img/instagram.png')} 
                                alt="Pagina de Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}