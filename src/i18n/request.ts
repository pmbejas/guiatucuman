import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

/**
 * Configuración de next-intl para obtener el locale activo.
 * Se lee desde una cookie 'idioma'; si no existe, se usa Español por defecto.
 */
export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const idioma = cookieStore.get('idioma')?.value ?? 'es';
  const localeValido = ['es', 'en', 'pt'].includes(idioma) ? idioma : 'es';

  return {
    locale: localeValido,
    messages: (await import(`../messages/${localeValido}.json`)).default,
  };
});
