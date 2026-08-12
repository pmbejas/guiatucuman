import type { Zona, Sector } from '@/types/Guia';
import { getLocale } from 'next-intl/server';

// 1. Importamos los datos JSON estáticamente para que el compilador los incluya
// directamente en el código de Cloudflare (sin usar 'fs').
import zonasData from '../../public/data/zonas.json';
import sectoresData from '../../public/data/sectores.json';

/**
 * Campos de texto que se pueden traducir en una zona.
 */
interface TraduccionZona {
  slug: string;
  descripcion: string;
  llegar: string;
  sectorAcampe: string;
}

/**
 * Diccionario para cargar las traducciones de forma dinámica pero predecible
 * para el compilador (ya que no podemos leer rutas variables con fs).
 */
const cargarTraduccion = async (idioma: string): Promise<TraduccionZona[]> => {
  switch (idioma) {
    case 'en':
      return (await import('../../public/data/traducciones/zonas.en.json')).default;
    case 'pt':
      return (await import('../../public/data/traducciones/zonas.pt.json')).default;
    default:
      throw new Error('Idioma no soportado');
  }
};

/**
 * Obtiene todas las zonas del JSON base y aplica las traducciones
 * correspondientes al idioma activo (según la cookie leída por next-intl).
 * Si el idioma es 'es' o no existe traducción, usa los datos originales.
 */
export async function obtenerZonas(): Promise<Zona[]> {
  try {
    const zonas = zonasData as Zona[];
    const idioma = await getLocale();

    if (idioma === 'es') {
      return zonas;
    }

    try {
      const traducciones = await cargarTraduccion(idioma);

      // Mergeamos cada zona con su traducción correspondiente (por slug)
      return zonas.map((zona) => {
        const traduccion = traducciones.find((t) => t.slug === zona.slug);
        if (!traduccion) return zona;

        return {
          ...zona,
          descripcion: traduccion.descripcion,
          llegar: traduccion.llegar,
          sectorAcampe: traduccion.sectorAcampe,
        };
      });
    } catch {
      // Si no existe el archivo de traducción, devuelve el español como fallback
      return zonas;
    }
  } catch (error) {
    console.error('Error al cargar zonas.json:', error);
    return [];
  }
}

/**
 * Lee el archivo sectores.json directamente desde la importación estática.
 */
export async function obtenerSectores(): Promise<Sector[]> {
  try {
    return sectoresData as Sector[];
  } catch (error) {
    console.error('Error al procesar sectores.json:', error);
    return [];
  }
}

/**
 * Busca una zona específica por su slug, con traducción aplicada.
 */
export async function obtenerZonaPorSlug(slug: string): Promise<Zona | undefined> {
  const zonas = await obtenerZonas();
  return zonas.find((zona) => zona.slug === slug);
}

/**
 * Obtiene todos los sectores que pertenecen a una zona específica.
 */
export async function obtenerSectoresPorZona(idZona: number): Promise<Sector[]> {
  const sectores = await obtenerSectores();
  return sectores.filter((sector) => sector.idZona === idZona);
}

/**
 * Busca un sector específico por su slug.
 */
export async function obtenerSectorPorSlug(slug: string): Promise<Sector | undefined> {
  const sectores = await obtenerSectores();
  return sectores.find((sector) => sector.slug === slug);
}

/**
 * Obtiene todos los sectores de la misma zona, excluyendo el actual.
 */
export async function obtenerOtrosSectores(
  idZona: number,
  idSectorActual: number
): Promise<Sector[]> {
  const sectores = await obtenerSectores();
  return sectores.filter(
    (sector) => sector.idZona === idZona && sector.id !== idSectorActual
  );
}