import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { obtenerZonas } from '@/services/GuiaService';
import { CardZona } from '@/components/CardZona';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Guía Online | Guía de Escalada Tucumán',
    description:
      'Guía de escalada online de Tucumán. Explorá las zonas El Rincón, Los Corpitos, Vías Viejas y más en Tafí del Valle.',
  };
}

/**
 * Página del listado de zonas de escalada.
 * Server Component: obtiene los datos directamente en el servidor.
 */
export default async function PaginaGuia() {
  const t = await getTranslations('guia');
  const zonas = await obtenerZonas();

  return (
    <div>
      {/* Encabezado con información general */}
      <div className="seccion-titulo-guias">
        <h1>{t('titulo')}</h1>
        {/* Fila con texto descriptivo e imagen */}
        <div className="seccion-titulo-guias--fila">
          <div className="seccion-titulo-guias--texto">
            <p><strong>Tafí del Valle</strong>{' — '}{t('descripcion1').replace('En el Departamento de Tafí del Valle', '')}</p>
            <p>{t('descripcion2')}</p>
            <p>{t('descripcion3')}</p>
            <p>{t('descripcion4')}</p>
          </div>
          <div className="seccion-titulo-guias--imagen">
            <Image
              className="imagen-titulo-guia"
              src="/img/guia/superiorLateral.jpg"
              alt="Imagen de la Guía de Escalada"
              width={420}
              height={300}
              style={{ borderRadius: '12px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Sección de zonas */}
      <div className="seccion-zonas-escalada-guias">
        <h1>{t('zonasEscalada')}</h1>

        {/* Mapas referenciales */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
          <a
            href="https://www.guiaescaladatucuman.com.ar"
            className="texto-link"
            target="_blank"
            rel="noreferrer noopener"
            style={{ flex: '1 1 280px', maxWidth: '360px' }}
            aria-label="Ver mapa general"
          >
            <Image
              className="imagen-mapa"
              src="/img/guia/mapaGeneral.jpg"
              alt="Mapa general de zonas de escalada"
              width={360}
              height={240}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <a
            href="https://www.guiaescaladatucuman.com.ar"
            className="texto-link"
            target="_blank"
            rel="noreferrer noopener"
            style={{ flex: '1 1 280px', maxWidth: '360px' }}
            aria-label="Ver mapa del Infiernillo"
          >
            <Image
              className="imagen-mapa"
              src="/img/guia/mapaInfiernillo.jpg"
              alt="Mapa del sector Infiernillo"
              width={360}
              height={240}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
          <a
            href="https://www.guiaescaladatucuman.com.ar"
            className="texto-link"
            target="_blank"
            rel="noreferrer noopener"
            style={{ flex: '1 1 280px', maxWidth: '360px' }}
            aria-label="Ver mapa del Valle"
          >
            <Image
              className="imagen-mapa"
              src="/img/guia/mapaValle.jpg"
              alt="Mapa del Valle de Tafí"
              width={360}
              height={240}
              style={{ width: '100%', height: 'auto' }}
            />
          </a>
        </div>

        {/* Cards de zonas */}
        <div className="seccion-card-zonas">
          {zonas.map((zona) => (
            <CardZona
              key={zona.id}
              imagen={zona.imagen}
              nombre={zona.nombre}
              slug={zona.slug}
              subtitulo={zona.subtitulo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
