import Image from 'next/image';

interface PropiedadesCardSugerencia {
  texto: string;
}

/**
 * Tarjeta de sugerencia o advertencia con icono y texto.
 * Se usa en la página principal para mostrar recomendaciones de seguridad y cuidado ambiental.
 */
export function CardSugerencia({ texto }: PropiedadesCardSugerencia) {
  return (
    <div className="contenedor-card-sugerencia">
      <Image
        className="contenedor-card-sugerencia--img"
        src="/img/guia/warning-sign-triangle.png"
        alt="Icono de advertencia"
        width={28}
        height={28}
      />
      <p>{texto}</p>
    </div>
  );
}
