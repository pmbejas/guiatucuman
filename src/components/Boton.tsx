interface PropiedadesBoton {
  texto: string;
  color: 'celeste' | 'verde' | 'gris';
  tipo?: 'button' | 'submit';
}

/**
 * Botón reutilizable con tres variantes de color.
 * Tipo de color 'celeste' = azul principal del sitio.
 */
export function Boton({ texto, color, tipo = 'button' }: PropiedadesBoton) {
  return (
    <button type={tipo} className={`boton ${color}`}>
      <span className="texto-boton">{texto}</span>
    </button>
  );
}
