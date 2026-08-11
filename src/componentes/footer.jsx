import React from "react";
import '../estilos/footer.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="contenedor-footer flex row text-center pt-3">
                <h4 className="mb-2">
                    <Link className="texto-link-footer ps-2" to="/">
                    Guia de Escalada Tucumán
                    </Link>
                </h4>
                <Link className="texto-link-footer-pmwebdeveloper ps-2" target="_blank" to="http://www.pmwebdeveloper.com">
                        Developed by PMWebdeveloper®
                </Link>
        </div>
    )
}