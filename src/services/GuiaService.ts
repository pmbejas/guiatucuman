import type { Zona, Sector } from '@/types/Guia';
import { getLocale } from 'next-intl/server';

// 1. Importaciones 100% estáticas. Cloudflare las incrusta en el código final.
import zonasData from '../../public/data/zonas.json';
import sectoresData from '../../public/data/sectores.json';

// Importamos las traducciones asumiendo que los archivos existen.
// Si algún archivo no existe en tu proyecto, comentalo o creá un JSON vacío.
import zonasEn from '../../public/data/traducciones/zonas.en.json';
import zonasPt from '../../public/data/traducciones/zonas.pt.json';

interface TraduccionZona {
  slug: string;
  descripcion: string;
  llegar: string;
  sectorAcampe: string;
}

export async function obtenerZonas(): Promise<Zona[]> {
  try {
    const zonas = zonasData as Zona[];
    let idioma = 'es';

    // 2. Blindamos getLocale() para que no rompa si el Server Component no tiene acceso a las cookies
    try {
      idioma = await getLocale();
    } catch (e) {
      idioma = 'es'; // Fallback automático si falla
    }

    if (idioma === 'en') {
      return aplicarTraduccion(zonas, zonasEn as TraduccionZona[]);
    } else if (idioma === 'pt') {
      return aplicarTraduccion(zonas, zonasPt as TraduccionZona[]);
    }

    return zonas;
  } catch (error) {
    console.error('Error Crítico al procesar zonas:', error);
    return [];
  }
}

function aplicarTraduccion(zonas: Zona[], traducciones: TraduccionZona[]) {
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
}

export async function obtenerSectores(): Promise<Sector[]> {
  try {
    return sectoresData as Sector[];
  } catch (error) {
    console.error('Error al procesar sectores.json:', error);
    return [];
  }
}

export async function obtenerZonaPorSlug(slug: string): Promise<Zona | undefined> {
  const zonas = await obtenerZonas();
  return zonas.find((zona) => zona.slug === slug);
}

export async function obtenerSectoresPorZona(idZona: number): Promise<Sector[]> {
  const sectores = await obtenerSectores();
  return sectores.filter((sector) => sector.idZona === idZona);
}

export async function obtenerSectorPorSlug(slug: string): Promise<Sector | undefined> {
  const sectores = await obtenerSectores();
  return sectores.find((sector) => sector.slug === slug);
}

export async function obtenerOtrosSectores(idZona: number, idSectorActual: number): Promise<Sector[]> {
  const sectores = await obtenerSectores();
  return sectores.filter((sector) => sector.idZona === idZona && sector.id !== idSectorActual);
}