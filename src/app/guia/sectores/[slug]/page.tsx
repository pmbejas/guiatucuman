import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getTranslations } from 'next-intl/server';
import {
  obtenerSectorPorSlug,
  obtenerSectores,
  obtenerOtrosSectores,
} from '@/services/GuiaService';
import { CardZona } from '@/components/CardZona';
import { CardVia } from '@/components/CardVia';

interface Parametros {
  params: Promise<{ slug: string }>;
}

/**
 * Genera las rutas estáticas para todos los sectores en tiempo de build (SSG).
 */
export async function generateStaticParams() {
  const sectores = await obtenerSectores();
  return sectores.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: Parametros): Promise<Metadata> {
  const { slug } = await params;
  const sector = await obtenerSectorPorSlug(slug);

  if (!sector) {
    return { title: 'Sector no encontrado | Guía de Escalada Tucumán' };
  }

  return {
    title: `${sector.nombre} | ${sector.nombreZona} | Guía de Escalada Tucumán`,
    description: `Sector de escalada ${sector.nombre} en ${sector.nombreZona}, Tucumán. ${sector.vias.length} vías disponibles.`,
  };
}

/**
 * Página de detalle de un sector de escalada.
 * Server Component con generación estática de rutas (SSG).
 */
export default async function PaginaSector({ params }: Parametros) {
  const { slug } = await params;
  const t = await getTranslations('sector');

  const sector = await obtenerSectorPorSlug(slug);

  if (!sector) {
    notFound();
  }

  const otrosSectores = await obtenerOtrosSectores(sector.idZona, sector.id);

  return (
    <div>
      {/* Encabezado del sector */}
      <div className="seccion-titulo-sector">
        <Link className="texto-link-sector" href={`/guia/${sector.slugZona}`}>
          <span>←</span>
          <p>{sector.nombreZona}</p>
        </Link>
        <h1>{sector.nombre}</h1>
        <p>{parse(sector.descripcion)}</p>
      </div>

      <div className="contenedor-contenido-zonas">
        {/* Imágenes y vías */}
        <div className="seccion-vias-sector">
          {sector.imagenSector && sector.imagenSector.length > 0 && (
            <div className="seccion-imagenes-vias-sector">
              {sector.imagenSector.map((imagen, indice) => (
                <div
                  key={indice}
                  style={{ flex: '1 1 280px', maxWidth: '460px', textAlign: 'center' }}
                >
                  <Image
                    className="seccion-imagenes-vias-sector-imagen"
                    src={`/img/zonas/${imagen.nombreImagen}.jpg`}
                    alt={`Imagen del sector ${sector.nombre}`}
                    width={460}
                    height={320}
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Listado de vías */}
          {sector.vias && sector.vias.length > 0 && (
            <div className="seccion-listado-vias-sector">
              {sector.vias.map((via, indice) => (
                <CardVia
                  key={indice}
                  numero={indice}
                  nombre={via.nombre}
                  equipadores={via.equipadores}
                  largo={via.largo}
                  chapas={via.chapas}
                  grado={via.grado}
                />
              ))}
            </div>
          )}
        </div>

        {/* Cómo llegar */}
        <div className="contenedor-seccion-acceso-sector" id="como-llegar">
          <div className="seccion-acceso-sector">
            <Image
              src={`/img/zonas/mapa-${sector.imagenLlegar}.jpg`}
              alt={`Mapa de acceso a ${sector.nombre}`}
              width={500}
              height={360}
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
            <div className="seccion-texto-acceso-sector">
              <h2>{t('comoLlegar')}</h2>
              <p>{parse(sector.llegar)}</p>
            </div>
          </div>
        </div>

        {/* Otros sectores */}
        {otrosSectores.length > 0 && (
          <div className="seccion-sectores-sectores">
            <h1>{t('otrosSectores')}</h1>
            <div className="seccion-card-sectores-sectores">
              {otrosSectores.map((otroSector) => (
                <CardZona
                  key={otroSector.id}
                  imagen={otroSector.imagen}
                  nombre={otroSector.nombre}
                  slug={`sectores/${otroSector.slug}`}
                  subtitulo={otroSector.subtitulo}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
