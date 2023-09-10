import React from "react";
import '../estilos/layout.css'
import { Outlet } from 'react-router-dom';

import { NavBar } from '../componentes/navbar';
import { Footer } from '../componentes/footer';

export const Layout = (props) => {
    return (
        <div>
            <header className="cabecera">
                <NavBar zonas={props.zonas} />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );       
}