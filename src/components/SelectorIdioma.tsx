'use client';

import { useState, useEffect, useTransition } from 'react';
import Image from 'next/image';

const IDIOMAS = [
  {
    codigo: 'es',
    etiqueta: 'Español',
    banderaSrc: 'https://flagcdn.com/ar.svg',
    banderaAlt: 'Bandera Argentina',
  },
  {
    codigo: 'en',
    etiqueta: 'English',
    banderaSrc: 'https://flagcdn.com/us.svg',
    banderaAlt: 'US Flag',
  },
  {
    codigo: 'pt',
    etiqueta: 'Português',
    banderaSrc: 'https://flagcdn.com/br.svg',
    banderaAlt: 'Bandeira do Brasil',
  },
];

/**
 * Selector de idioma con banderas SVG.
 * Usa imágenes de flagcdn.com para compatibilidad universal en todos los sistemas.
 * La cookie se lee en useEffect para evitar errores de SSR.
 */
export function SelectorIdioma() {
  const [, startTransition] = useTransition();
  const [idiomaActual, setIdiomaActual] = useState('es');

  useEffect(() => {
    const idiomaGuardado =
      document.cookie
        .split('; ')
        .find((fila) => fila.startsWith('idioma='))
        ?.split('=')[1] ?? 'es';

    setIdiomaActual(idiomaGuardado);
  }, []);

  const cambiarIdioma = (idioma: string) => {
    document.cookie = `idioma=${idioma}; path=/; max-age=${60 * 60 * 24 * 365}`;
    startTransition(() => {
      window.location.reload();
    });
  };

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      role="group"
      aria-label="Seleccionar idioma"
    >
      {IDIOMAS.map((idioma) => {
        const esActivo = idiomaActual === idioma.codigo;
        return (
          <button
            key={idioma.codigo}
            onClick={() => cambiarIdioma(idioma.codigo)}
            aria-label={`Cambiar idioma a ${idioma.etiqueta}`}
            aria-pressed={esActivo}
            title={idioma.etiqueta}
            style={{
              background: 'none',
              border: esActivo
                ? '2px solid rgba(255,255,255,0.9)'
                : '2px solid transparent',
              borderRadius: '4px',
              padding: '2px',
              cursor: 'pointer',
              opacity: esActivo ? 1 : 0.5,
              transition: 'opacity 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
              transform: esActivo ? 'scale(1.15)' : 'scale(1)',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              if (!esActivo) (e.currentTarget as HTMLButtonElement).style.opacity = '0.85';
            }}
            onMouseLeave={(e) => {
              if (!esActivo) (e.currentTarget as HTMLButtonElement).style.opacity = '0.5';
            }}
          >
            <Image
              src={idioma.banderaSrc}
              alt={idioma.banderaAlt}
              width={24}
              height={16}
              style={{ borderRadius: '2px', display: 'block' }}
              unoptimized
            />
          </button>
        );
      })}
    </div>
  );
}

