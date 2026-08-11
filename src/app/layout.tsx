import type { Metadata } from 'next';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { obtenerZonas } from '@/services/GuiaService';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guía de Escalada Tucumán',
  description:
    'Guía de escalada deportiva de la provincia de Tucumán, Argentina. Zonas, sectores y vías en Tafí del Valle.',
  keywords: 'escalada, Tucumán, Tafí del Valle, guía, sectores, vías, Argentina',
};

/**
 * Layout raíz de la aplicación.
 * Obtiene las zonas y las traducciones en el servidor
 * para pasarlas a los componentes hijos.
 */
export default async function LayoutRaiz({
  children,
}: {
  children: React.ReactNode;
}) {
  const zonas = await obtenerZonas();
  const mensajes = await getMessages();

  return (
    <html lang="es">
      <body>
        <NextIntlClientProvider messages={mensajes}>
          <header className="cabecera">
            <Navbar zonas={zonas} />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
