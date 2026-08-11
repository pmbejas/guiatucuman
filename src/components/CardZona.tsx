import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';

interface PropiedadesCardZona {
  imagen: string;
  nombre: string;
  slug: string;
  subtitulo: string;
}

/**
 * Tarjeta visual para mostrar una zona o sector de escalada.
 * Utiliza next/image para carga optimizada de la imagen.
 */
export function CardZona({ imagen, nombre, slug, subtitulo }: PropiedadesCardZona) {
  return (
    <div className="contenedor-card-zona">
      <Image
        src={`/img/zonas/${imagen}.jpg`}
        alt={`Foto de ${nombre}`}
        width={280}
        height={180}
        style={{ objectFit: 'cover', width: '100%', height: '180px' }}
      />
      <div className="contenedor-h3-link">
        <Link href={`/guia/${slug}`}>
          <h3 className="h3-link">{nombre}</h3>
        </Link>
      </div>
      <p>{parse(subtitulo)}</p>
    </div>
  );
}
