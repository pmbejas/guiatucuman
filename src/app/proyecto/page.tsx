import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Sobre Nosotros | Guía de Escalada Tucumán',
    description:
      'Conocé el proyecto detrás de la Guía de Escalada Tucumán y la Asociación Argentina de Montaña (AAM).',
  };
}

/**
 * Página "Sobre Nosotros / El Proyecto".
 * Server Component: contenido estático renderizado en el servidor.
 */
export default async function PaginaProyecto() {
  const t = await getTranslations('proyecto');

  return (
    <div>
      <div className="seccion-titulo-proyecto">
        <h1>{t('titulo')}</h1>
      </div>

      <div className="contenedor-contenido-proyecto">
        <div className="contenido-proyecto">
          <div className="contenedor-texto-proyecto">
            <div className="texto-foto-proyecto">
              <div style={{ flex: '0 0 45%', minWidth: '280px' }}>
                <Image
                  className="imagen-proyecto"
                  src="/img/proyecto/nosotros.jpg"
                  alt="Imagen del Proyecto"
                  width={500}
                  height={380}
                  style={{ borderRadius: '12px', objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div>
                <p>{t('descripcion1')}</p>
                <p>{t('descripcion2')}</p>
                <p>
                  {t('descripcion3')}{' '}
                  <a
                    href="mailto:consulta@guiaescaladatucuman.com.ar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    consulta@guiaescaladatucuman.com.ar
                  </a>
                  .
                </p>
                <p>{t('descripcion4')}</p>
                <p>{t('descripcion5')}</p>
                <p>{t('palestras')}</p>
                <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
                  <li>A.A.M. - Salas y Valez 236 - Yerba Buena</li>
                  <li>Mas Alto - Av. Pte. Perón 1000 - Yerba Buena</li>
                  <li>Punto Rojo - Dean Funes 50</li>
                  <li>El Trepe - Jose Colombres 89</li>
                  <li>El Muro - Thames 212</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="separador-proyecto" />

          <div className="contenedor-imagen-proyecto">
            <Image
              className="imagen-pie-proyecto"
              src="/img/proyecto/tafidelvalle.jpg"
              alt="Foto Tafí del Valle"
              width={800}
              height={450}
              style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          <div className="texto-creadores-proyecto">
            <h2>{t('agradecimientos')}</h2>
            <p>{t('agradecimientosGuias')}</p>
            <p>{t('agradecimientosEquipo')}</p>
            <p>{t('agradecimientosSocios')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
