'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SelectorIdioma } from '@/components/SelectorIdioma';
import type { Zona } from '@/types/Guia';

interface PropiedadesNavbar {
  zonas: Zona[];
}

/**
 * Barra de navegación principal del sitio.
 * Incluye menú desktop con submenú de zonas y menú móvil con hamburger.
 */
export function Navbar({ zonas }: PropiedadesNavbar) {
  const t = useTranslations('navegacion');
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);
  const [submenuAbierto, setSubmenuAbierto] = useState(false);

  const alternarMenuMovil = () => {
    setMenuMovilAbierto((anterior) => !anterior);
  };

  const cerrarMenuMovil = () => {
    setMenuMovilAbierto(false);
    setSubmenuAbierto(false);
  };

  return (
    <nav aria-label="Navegación principal">
      {/* --- Barra Desktop --- */}
      <div className="barra-navegacion">
        {/* Logo */}
        <div className="seccion-barra barra1">
          <Link href="/" aria-label="Ir al inicio">
            <Image
              className="logo"
              src="/img/logo.png"
              alt="Guía de Escalada Tucumán"
              width={120}
              height={42}
            />
          </Link>
        </div>

        {/* Links de navegación */}
        <div className="seccion-barra barra2">
          <Link href="/" className="texto-menu">
            <span>{t('inicio')}</span>
          </Link>

          <div className="con-submenu">
            <Link href="/guia" className="texto-menu">
              <span>{t('guia')}</span>
              <span className="texto-menu-small">▼</span>
            </Link>
            <div className="contenedor-submenu" role="menu">
              <div className="submenu">
                {zonas.map((zona) => (
                  <Link
                    key={zona.id}
                    href={`/guia/${zona.slug}`}
                    role="menuitem"
                  >
                    <p className="opciones-submenu">{zona.nombre}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/proyecto" className="texto-menu">
            <span>{t('nosotros')}</span>
          </Link>
        </div>

        {/* Redes sociales y selector de idioma */}
        <div className="seccion-barra barra3">
          <SelectorIdioma />
          <a
            href="https://www.aamtuc.org"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Sitio web de la AAM"
          >
            <Image
              className="imagen-redes-sociales logoAAM"
              src="/img/iconos/logoAAM.svg"
              alt="Asociación Argentina de Montaña"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.youtube.com/@asociacionargentinademonta9143"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Canal de YouTube de la AAM"
          >
            <Image
              className="imagen-redes-sociales"
              src="/img/youtube.png"
              alt="Canal de YouTube"
              width={26}
              height={26}
            />
          </a>
          <a
            href="https://www.instagram.com/aam_tucuman"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram de la AAM"
          >
            <Image
              className="imagen-redes-sociales"
              src="/img/instagram.png"
              alt="Instagram de la AAM"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>

      {/* --- Barra Móvil --- */}
      <div className="barraMovil">
        <Link href="/" onClick={cerrarMenuMovil} aria-label="Ir al inicio">
          <Image
            className="logo"
            src="/img/logo.png"
            alt="Guía de Escalada Tucumán"
            width={110}
            height={38}
          />
        </Link>

        <button
          onClick={alternarMenuMovil}
          aria-label={menuMovilAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuMovilAbierto}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {menuMovilAbierto ? (
            <Image
              src="/img/iconos/menu-x.png"
              alt="Cerrar menú"
              width={24}
              height={24}
              className="menu-x"
            />
          ) : (
            <Image
              src="/img/iconos/hamburger.png"
              alt="Abrir menú"
              width={24}
              height={24}
              className="hamburger"
            />
          )}
        </button>

        {menuMovilAbierto && (
          <div className="barraMovilMenu" role="dialog" aria-modal="true">
            <Link href="/" className="texto-menu" onClick={cerrarMenuMovil}>
              <span>{t('inicio')}</span>
            </Link>

            <div className="con-submenu" style={{ width: '90%', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <button
                className="texto-menu"
                onClick={() => setSubmenuAbierto((a) => !a)}
                aria-expanded={submenuAbierto}
                style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', gap: '4px' }}
              >
                <span>{t('guia')}</span>
                <span className="texto-menu-small">▼</span>
              </button>
              {submenuAbierto && (
                <div className="submenu" style={{ position: 'static', width: '100%', marginTop: 12 }}>
                  {zonas.map((zona) => (
                    <Link
                      key={zona.id}
                      href={`/guia/${zona.slug}`}
                      onClick={cerrarMenuMovil}
                    >
                      <p className="opciones-submenu">{zona.nombre}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/proyecto" className="texto-menu" onClick={cerrarMenuMovil}>
              <span>{t('nosotros')}</span>
            </Link>

            {/* Separador */}
            <div style={{ width: '80%', height: '1px', background: 'rgba(255,255,255,0.15)', margin: '8px 0' }} />

            {/* Fila 1: Selector de idioma */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SelectorIdioma />
            </div>

            {/* Fila 2: Links a sitios externos */}
            <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
              <a
                href="https://www.aamtuc.org"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Sitio web de la AAM"
              >
                <Image
                  className="imagen-redes-sociales logoAAM"
                  src="/img/iconos/logoAAM.svg"
                  alt="AAM"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://www.youtube.com/@asociacionargentinademonta9143" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
                <Image className="imagen-redes-sociales" src="/img/youtube.png" alt="YouTube" width={26} height={26} />
              </a>
              <a href="https://www.instagram.com/aam_tucuman" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                <Image className="imagen-redes-sociales" src="/img/instagram.png" alt="Instagram" width={26} height={26} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
