import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada | Guía de Escalada Tucumán',
};

/**
 * Página 404 personalizada para rutas no encontradas.
 */
export default function PaginaNoEncontrada() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '20px',
        textAlign: 'center',
        padding: '40px 20px',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--color-primario)' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: 'var(--color-texto-oscuro)' }}>
        Página no encontrada
      </h2>
      <p style={{ color: 'var(--color-texto-secundario)', maxWidth: '400px' }}>
        La zona o sector que buscás no existe o fue movida. Volvé al inicio para explorar la guía.
      </p>
      <Link
        href="/"
        style={{
          backgroundColor: 'var(--color-primario)',
          color: 'white',
          padding: '10px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          marginTop: '8px',
        }}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
