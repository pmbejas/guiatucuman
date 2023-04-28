import React from "react";
import '../estilos/layout.css'

import { Outlet } from 'react-router-dom';
import { NavBar } from '../componentes/navbar.jsx';

export const Layout = () => {
    return (
        <div>
            <header className="cabecera">
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="seccion-apoyo">
                    <p>APOYAN ESTE PROYECTO</p>
                    <div className="seccion-contenedor-apoyo">
                        <img className="icono-apoyo" src={require("../img/apoyos/icono1.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono2.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono3.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono4.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono5.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono6.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono7.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono8.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono9.png")} alt="" />
                        <img className="icono-apoyo" src={require("../img/apoyos/icono10.png")} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    );       
}