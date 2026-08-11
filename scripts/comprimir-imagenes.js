/**
 * Script de compresión masiva de imágenes.
 * Compatible con jimp v1.6.x.
 *
 * API verificada en node_modules/@jimp/core/dist/commonjs/index.d.ts:
 *   - Jimp.read(path)      → lee un archivo (no fromFile)
 *   - imagen.bitmap.width  → ancho de la imagen
 *   - imagen.resize({ w }) → redimensionar
 *   - imagen.getBuffer(mime, { quality }) → exportar con calidad
 *
 * Uso:
 *   npm install jimp
 *   node scripts/comprimir-imagenes.js
 *
 * IMPORTANTE: Detener el servidor de dev antes de ejecutar.
 */

const { Jimp } = require('jimp');  // destructurar: require sin {} devuelve el módulo completo
const fs = require('fs');
const path = require('path');

// Configuración de compresión
const ANCHO_MAXIMO = 2400;   // Píxeles máximos de ancho
const CALIDAD_JPG = 75;      // Calidad JPEG (0-100)
const CARPETA_IMAGENES = path.join(__dirname, '..', 'public', 'img');

/**
 * Obtiene recursivamente todos los archivos de imagen en una carpeta.
 */
function obtenerArchivosDeImagen(carpeta) {
  const extensionesPermitidas = ['.jpg', '.jpeg', '.png'];
  const archivos = [];

  function recorrerCarpeta(rutaActual) {
    const entradas = fs.readdirSync(rutaActual, { withFileTypes: true });

    for (const entrada of entradas) {
      const rutaCompleta = path.join(rutaActual, entrada.name);

      if (entrada.isDirectory()) {
        recorrerCarpeta(rutaCompleta);
      } else if (extensionesPermitidas.includes(path.extname(entrada.name).toLowerCase())) {
        archivos.push(rutaCompleta);
      }
    }
  }

  recorrerCarpeta(carpeta);
  return archivos;
}

/**
 * Formatea el tamaño de bytes a una cadena legible.
 */
function formatearTamanio(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${bytes} B`;
}

/**
 * Comprime una imagen individual.
 * Usa Jimp.read() que es el método estático correcto en jimp v1.6.x.
 */
async function comprimirImagen(rutaArchivo) {
  const extension = path.extname(rutaArchivo).toLowerCase();
  const tamanioOriginal = fs.statSync(rutaArchivo).size;
  const esJpeg = extension === '.jpg' || extension === '.jpeg';

  // Si la imagen ya pesa menos de 8 MB, la salteamos para no reprocesar
  if (tamanioOriginal < 8 * 1024 * 1024) {
    console.log(`  - ${path.basename(rutaArchivo)}: omitida por tamaño (${formatearTamanio(tamanioOriginal)})`);
    return;
  }

  try {
    let imagen;
    
    if (esJpeg) {
      // Bypasseamos Jimp.read() para JPEGs porque no pasa correctamente las opciones.
      // Usamos directamente jpeg-js (la librería que usa Jimp por debajo)
      const jpegJs = require('jpeg-js');
      const bufferOriginal = fs.readFileSync(rutaArchivo);
      
      // Decodificamos permitiendo resoluciones y memoria gigantes
      const decodificado = jpegJs.decode(bufferOriginal, { 
        maxResolutionInMP: 2000, 
        maxMemoryUsageInMB: 8192 
      });
      
      // Creamos la instancia de Jimp con los píxeles ya decodificados
      imagen = new Jimp({
        width: decodificado.width,
        height: decodificado.height,
        data: decodificado.data
      });
    } else {
      imagen = await Jimp.read(rutaArchivo);
    }
    
    const anchoOriginal = imagen.bitmap.width;

    // Redimensionar solo si supera el ancho máximo
    if (anchoOriginal > ANCHO_MAXIMO) {
      imagen.resize({ w: ANCHO_MAXIMO });
    }

    // Exportar con calidad
    let buffer;
    if (esJpeg) {
      buffer = await imagen.getBuffer('image/jpeg', { quality: CALIDAD_JPG });
    } else {
      buffer = await imagen.getBuffer('image/png');
    }

    // Solo reemplazar si el resultado es más pequeño
    if (buffer.length < tamanioOriginal) {
      fs.writeFileSync(rutaArchivo, buffer);
      const reduccion = ((1 - buffer.length / tamanioOriginal) * 100).toFixed(0);
      console.log(
        `  ✓ ${path.basename(rutaArchivo)}: ${formatearTamanio(tamanioOriginal)} → ${formatearTamanio(buffer.length)} (${reduccion}% menos)`
      );
    } else {
      console.log(`  - ${path.basename(rutaArchivo)}: ya optimizada (${formatearTamanio(tamanioOriginal)})`);
    }
  } catch (error) {
    console.error(`  ✗ Error al comprimir ${path.basename(rutaArchivo)}: ${error.message}`);
  }
}

/**
 * Función principal: comprime todas las imágenes.
 */
async function comprimirTodasLasImagenes() {
  console.log('🖼️  Iniciando compresión masiva de imágenes (jimp v1.6.x)...\n');

  const archivos = obtenerArchivosDeImagen(CARPETA_IMAGENES);
  console.log(`📁 Se encontraron ${archivos.length} imágenes\n`);

  let tamanioTotalAntes = 0;
  for (const archivo of archivos) {
    tamanioTotalAntes += fs.statSync(archivo).size;
  }

  for (const archivo of archivos) {
    await comprimirImagen(archivo);
  }

  let tamanioTotalDespues = 0;
  for (const archivo of archivos) {
    tamanioTotalDespues += fs.statSync(archivo).size;
  }

  const reduccionTotal = ((1 - tamanioTotalDespues / tamanioTotalAntes) * 100).toFixed(0);
  console.log('\n📊 Resumen:');
  console.log(`   Antes:   ${formatearTamanio(tamanioTotalAntes)}`);
  console.log(`   Después: ${formatearTamanio(tamanioTotalDespues)}`);
  console.log(`   Ahorro:  ${reduccionTotal}% (${formatearTamanio(tamanioTotalAntes - tamanioTotalDespues)})`);
  console.log('\n✅ Compresión completada.');
}

comprimirTodasLasImagenes().catch(console.error);
