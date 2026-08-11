import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getTranslations } from 'next-intl/server';
import { obtenerZonaPorSlug, obtenerSectoresPorZona, obtenerZonas } from '@/services/GuiaService';
import { CardZona } from '@/components/CardZona';
import { Boton } from '@/components/Boton';

interface Parametros {
  params: Promise<{ slug: string }>;
}

/**
 * Genera las rutas estáticas para todas las zonas en tiempo de build.
 * Esto permite que Next.js genere las páginas de forma estática (SSG)
 * para máximo rendimiento y SEO.
 */
export async function generateStaticParams() {
  const zonas = await obtenerZonas();
  return zonas.map((zona) => ({ slug: zona.slug }));
}

export async function generateMetadata({ params }: Parametros): Promise<Metadata> {
  const { slug } = await params;
  const zona = await obtenerZonaPorSlug(slug);

  if (!zona) {
    return { title: 'Zona no encontrada | Guía de Escalada Tucumán' };
  }

  return {
    title: `${zona.nombre} | Guía de Escalada Tucumán`,
    description: `Información sobre la zona de escalada ${zona.nombre} en Tucumán. ${zona.subtitulo}`,
  };
}

/**
 * Página de detalle de una zona de escalada.
 * Server Component con generación estática de rutas (SSG).
 */
export default async function PaginaZona({ params }: Parametros) {
  const { slug } = await params;
  const t = await getTranslations('zona');

  const zona = await obtenerZonaPorSlug(slug);

  if (!zona) {
    notFound();
  }

  const sectores = await obtenerSectoresPorZona(zona.id);

  return (
    <div>
      {/* Encabezado de la zona */}
      <div className="seccion-titulo-zonas">
        <h1>{zona.nombre}</h1>
        <p>{parse(zona.descripcion)}</p>
      </div>

      <div className="contenedor-contenido-zonas">
        {/* Sección de acceso */}
        <div className="seccion-acceso-zonas">
          <Image
            src={`/img/zonas/mapa-${slug}.jpg`}
            alt={`Mapa de acceso a ${zona.nombre}`}
            width={500}
            height={360}
            style={{ borderRadius: '10px', objectFit: 'cover' }}
          />
          <div className="seccion-texto-acceso-zonas">
            <h2>{t('comoLlegar')}</h2>
            <p>{parse(zona.llegar)}</p>

            <div className="boton-maps">
              {zona.googleMaps !== '' && (
                <a href={zona.googleMaps} target="_blank" rel="noreferrer noopener" aria-label="Ver en Google Maps">
                  <Boton texto={t('googleMaps')} color="celeste" />
                </a>
              )}
              {zona.trackWikiloc !== '' && (
                <a href={zona.trackWikiloc} target="_blank" rel="noreferrer noopener" aria-label="Ver track en Wikiloc">
                  <Boton texto={t('trackWikiloc')} color="verde" />
                </a>
              )}
              {zona.archivoGPX !== '' && (
                <a href={zona.archivoGPX} target="_blank" rel="noreferrer noopener" aria-label="Descargar archivo GPX">
                  <Boton texto={t('archivoGPX')} color="gris" />
                </a>
              )}
            </div>

            <h2>{t('zonaAcampe')}</h2>
            <p>{parse(zona.sectorAcampe)}</p>
          </div>
        </div>

        {/* Sección de sectores */}
        <div className="seccion-sectores-zonas">
          <h1>{t('sectores')}</h1>
          <div className="seccion-card-sectores-zonas">
            {sectores.map((sector) => (
              <CardZona
                key={sector.id}
                imagen={sector.imagen}
                nombre={sector.nombre}
                slug={`sectores/${sector.slug}`}
                subtitulo={sector.subtitulo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
