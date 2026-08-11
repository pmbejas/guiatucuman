/**
 * Representa una imagen asociada a un sector de escalada.
 */
export interface ImagenSector {
  nombreImagen: string;
}

/**
 * Representa una vía de escalada dentro de un sector.
 */
export interface Via {
  nombre: string;
  equipadores: string;
  largo: string;
  chapas: string;
  grado: string;
}

/**
 * Representa una zona de escalada (ej: El Rincón, Los Corpitos).
 */
export interface Zona {
  id: number;
  nombre: string;
  slug: string;
  subtitulo: string;
  imagen: string;
  descripcion: string;
  llegar: string;
  sectorAcampe: string;
  googleMaps: string;
  trackWikiloc: string;
  archivoGPX: string;
}

/**
 * Representa un sector de escalada dentro de una zona.
 */
export interface Sector {
  id: number;
  idZona: number;
  nombre: string;
  slug: string;
  slugZona: string;
  nombreZona: string;
  subtitulo: string;
  imagen: string;
  descripcion: string;
  llegar: string;
  imagenLlegar: string;
  imagenSector: ImagenSector[];
  vias: Via[];
}
