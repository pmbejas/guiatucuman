interface PropiedadesCardVia {
  numero: number;
  nombre: string;
  equipadores: string;
  largo: string;
  chapas: string;
  grado: string;
}

/**
 * Tarjeta para mostrar la información de una vía de escalada.
 * Muestra número, nombre, equipador, largo, chapas y grado.
 */
export function CardVia({ numero, nombre, equipadores, largo, chapas, grado }: PropiedadesCardVia) {
  return (
    <div className="contenedor-card-via">
      <div className="seccion-numero-via">
        <p>{numero + 1}</p>
      </div>
      <div className="seccion-nombre-via">
        <p className="nombre-via">{nombre}</p>
        <p className="subtitulo-via">{equipadores}</p>
      </div>
      <div className="seccion-datos-via">
        <p>{largo}</p>
        <p>{chapas}</p>
        <p className="strong">{grado}</p>
      </div>
    </div>
  );
}
