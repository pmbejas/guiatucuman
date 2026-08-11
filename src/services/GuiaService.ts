import type { Zona, Sector } from '@/types/Guia';
import { getLocale } from 'next-intl/server';
import path from 'path';
import { promises as fs } from 'fs';

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
 * Lee un archivo JSON desde la carpeta public del servidor.
 */
async function leerArchivoJson<T>(rutaRelativa: string): Promise<T> {
  const rutaCompleta = path.join(process.cwd(), 'public', rutaRelativa);
  const contenido = await fs.readFile(rutaCompleta, 'utf-8');
  return JSON.parse(contenido) as T;
}

/**
 * Obtiene todas las zonas del JSON base y aplica las traducciones
 * correspondientes al idioma activo (según la cookie leída por next-intl).
 * Si el idioma es 'es' o no existe traducción, usa los datos originales.
 */
export async function obtenerZonas(): Promise<Zona[]> {
  try {
    const zonas = await leerArchivoJson<Zona[]>('data/zonas.json');
    const idioma = await getLocale();

    if (idioma === 'es') {
      return zonas;
    }

    try {
      const traducciones = await leerArchivoJson<TraduccionZona[]>(
        `data/traducciones/zonas.${idioma}.json`
      );

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
    console.error('Error al leer zonas.json:', error);
    return [];
  }
}

/**
 * Lee el archivo sectores.json desde el sistema de archivos del servidor.
 */
export async function obtenerSectores(): Promise<Sector[]> {
  try {
    return await leerArchivoJson<Sector[]>('data/sectores.json');
  } catch (error) {
    console.error('Error al leer sectores.json:', error);
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
