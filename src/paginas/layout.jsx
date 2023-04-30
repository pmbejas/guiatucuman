import React from "react";
import '../estilos/layout.css'
import { Outlet } from 'react-router-dom';

import { NavBar } from '../componentes/navbar';
import { Apoyo } from '../componentes/apoyo';
import { Footer } from '../componentes/footer';

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
                <Apoyo />
                <Footer />
            </footer>
        </div>
    );       
}