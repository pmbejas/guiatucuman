import React from "react";
import '../estilos/footer.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="contenedor-footer flex row text-center pt-3">
                <h3 className="mb-2">
                    <Link className="texto-link-footer ps-2" to="/">
                    Guia de Escalada Tucumán
                    </Link>
                </h3>
                <h6 className="mt-4 pb-3">Sitio realizado por 
                    <Link className="texto-link-footer ps-2" target="_blank" to="http://www.pmwebdeveloper.com.ar">
                        PMWebdeveloper®
                    </Link>
                </h6>
        </div>
    )
}