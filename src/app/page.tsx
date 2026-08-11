import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Boton } from '@/components/Boton';
import { CardSugerencia } from '@/components/CardSugerencia';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadatos');
  return {
    title: t('tituloSitio'),
    description: t('descripcionSitio'),
  };
}

/**
 * Página de inicio (Landing Page).
 * Server Component: se renderiza en el servidor para SEO óptimo.
 */
export default async function PaginaPrincipal() {
  const t = await getTranslations('principal');

  const sugerenciasSeguridad = [
    t('sugerencias.casco'),
    t('sugerencias.chequeo'),
    t('sugerencias.maniobras'),
    t('sugerencias.rapel'),
    t('sugerencias.descuelgues'),
    t('sugerencias.rocasSueltas'),
    t('sugerencias.abrigo'),
    t('sugerencias.malAltura'),
    t('sugerencias.agua'),
    t('sugerencias.cascoAproximacion'),
    t('sugerencias.primerosAuxilios'),
    t('sugerencias.escala'),
    t('sugerencias.cuerda'),
  ];

  const sugerenciasCuidado = [
    t('cuidado.conservacion'),
    t('cuidado.sendas'),
    t('cuidado.nidos'),
    t('cuidado.fuego'),
    t('cuidado.musica'),
    t('cuidado.acampe'),
    t('cuidado.chinchillones'),
    t('cuidado.corrales'),
    t('cuidado.desmalezar'),
    t('cuidado.objetos'),
    t('cuidado.mascotas'),
    t('cuidado.basuraOrganica'),
    t('cuidado.plasticos'),
    t('cuidado.colillas'),
    t('cuidado.basuraCasa'),
    t('cuidado.banio'),
  ];

  return (
    <div>
      {/* Sección hero: bienvenida con fondo azul marino */}
      <div className="seccion-principal-header">
        <div className="seccion-superior">
          <div className="contenedor-mitad">
            <p>{t('bienvenida')}</p>
            <p>{t('descripcion1')}</p>
            <p>{t('descripcion2')}</p>
            <p>{t('descripcion3')}</p>
            <Link href="/guia">
              <Boton texto={t('botonGuia')} color="celeste" />
            </Link>
          </div>
          <div className="contenedor-mitad">
            <Image
              className="contenedor-mitad-foto"
              src="/img/principal/lateralSuperior.jpg"
              alt="Escalada en Tucumán"
              width={600}
              height={420}
              priority
              style={{ width: '90%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>

      {/* Sección de aclaraciones y sugerencias */}
      <div className="seccion-medio">
        <div className="seccion-sugerencias-guias">
          <h2>{t('aclaracionesTitulo')}</h2>
          <div className="seccion-alerta-guias">
            <div className="seccion-alerta-contenido-guias">
              <div className="seccion-alerta-contenido-guias-titulo">
                <h1>⚠️</h1>
                <p>
                  <span>{t('alertaEscaladaTitulo')}</span>
                </p>
              </div>
              <p>{t('alertaEscaladaTexto')}</p>
            </div>
            <div className="seccion-alerta-card-informacion">
              {sugerenciasSeguridad.map((sugerencia, indice) => (
                <CardSugerencia key={indice} texto={sugerencia} />
              ))}
            </div>
            <div className="contenedor-principal-fotos">
              <Image
                className="seccion-alerta-foto"
                src="/img/principal/principal1.jpg"
                alt="Escalada en sector de Tucumán"
                width={1200}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Sección de cuidado del lugar */}
        <div className="seccion-sugerencias-guias">
          <h2>{t('cuidadoLugarTitulo')}</h2>
          <div className="seccion-alerta-guias">
            <div className="seccion-alerta-contenido-guias">
              <div className="seccion-alerta-contenido-guias-titulo">
                <h1>🌿</h1>
                <p>
                  <span>{t('alertaNaturalezaTitulo')}</span>
                </p>
              </div>
              <p>{t('alertaNaturalezaTexto')}</p>
            </div>
            <div className="seccion-alerta-card-informacion">
              {sugerenciasCuidado.map((sugerencia, indice) => (
                <CardSugerencia key={indice} texto={sugerencia} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
